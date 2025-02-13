import { Payment, StatusPayment } from "../../../prisma/generated/client";
import { checkRoomAvailability } from "../../lib/checkRoomAvailability";
import prisma from "../../lib/prisma";
import schedule from "node-schedule";
import { addMinutes } from "date-fns";
import xendit from "../../lib/xendit";
import { checkPeakRate } from "../../lib/checkPeakRate";
import { BASE_URL_FE } from "../../config";

interface CreateRoomReservationBody {
  userId: number;
  roomId: number;
  startDate: Date;
  endDate: Date;
  paymentMethode: "MANUAL" | "OTOMATIS";
}

export const createRoomReservationService = async (
  body: CreateRoomReservationBody
) => {
  try {
    const { userId, roomId, startDate, endDate, paymentMethode } = body;
    const checkinDate = new Date(startDate);
    checkinDate.setUTCHours(7, 0, 0, 0);

    const checkoutDate = new Date(endDate);
    checkoutDate.setUTCHours(5, 0, 0, 0);

    const isAvailable = await checkRoomAvailability(
      roomId,
      checkinDate,
      checkoutDate
    );

    if (!isAvailable) {
      throw new Error("Room not available on selected date.");
    }

    const diffTime = checkoutDate.getTime() - checkinDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      throw new Error("Minimum reservation is 1 night.");
    }

    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
        isDeleted: false,
      },
      select: {
        price: true,
        stock: true,
      },
    });

    if (!room || room.price === undefined) {
      throw new Error("Room not found.");
    }

    let totalPrice = 0;
    const startForPrice = new Date(checkinDate);

    for (let i = 0; i < diffDays; i++) {
      const currentDate = new Date(startForPrice);
      currentDate.setUTCDate(startForPrice.getUTCDate() + i);
      currentDate.setUTCHours(0, 0, 0, 0);

      const peakRate = await checkPeakRate(currentDate, roomId);
      totalPrice += peakRate ? peakRate.price : room.price;
    }

    let payment: Payment;

    if (paymentMethode === "OTOMATIS") {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
          isDeleted: false,
        },
        select: { email: true },
      });

      if (!user?.email) {
        throw new Error("User not found.");
      }

      payment = await prisma.payment.create({
        data: {
          userId,
          totalPrice,
          duration: diffDays,
          paymentMethode: "OTOMATIS",
          paymentProof: null,
          status: StatusPayment.WAITING_FOR_PAYMENT,
        },
      });

      const invoice = await xendit.Invoice.createInvoice({
        data: {
          externalId: payment.uuid,
          amount: totalPrice,
          payerEmail: user.email,
          description: `Room eservation for ${diffDays} night(s)`,
          invoiceDuration: "3600",
          currency: "IDR",
          shouldSendEmail: true,
          reminderTime: 1,
          successRedirectUrl: `http://${BASE_URL_FE}/transactions/${payment.id}`,
          failureRedirectUrl: `http://${BASE_URL_FE}/transactions/${payment.id}`,
          customerNotificationPreference: {
            invoiceCreated: ["email"],
            invoiceReminder: ["email"],
            invoicePaid: ["email"],
          },
        },
      });

      payment = await prisma.payment.update({
        where: { id: payment.id },
        data: {
          invoiceUrl: invoice.invoiceUrl,
          expiredAt: new Date(invoice.expiryDate),
        },
      });
    } else {
      payment = await prisma.payment.create({
        data: {
          userId,
          totalPrice,
          duration: diffDays,
          paymentMethode: "MANUAL",
          paymentProof: null,
          status: StatusPayment.WAITING_FOR_PAYMENT,
        },
      });

      const expirationTime = addMinutes(new Date(), 60);

      schedule.scheduleJob(expirationTime, async () => {
        try {
          await prisma.payment.updateMany({
            where: {
              id: payment.id,
              status: StatusPayment.WAITING_FOR_PAYMENT,
            },
            data: {
              status: StatusPayment.CANCELLED,
              expiredAt: expirationTime,
            },
          });
        } catch (error) {
          console.error("Error cancelling payment:", error);
        }
      });
    }

    const reservations = [];
    for (let i = 0; i < diffDays; i++) {
      const currentStartDate = new Date(checkinDate);
      currentStartDate.setUTCDate(checkinDate.getUTCDate() + i);
      currentStartDate.setUTCHours(7, 0, 0, 0);

      const currentEndDate = new Date(currentStartDate);
      currentEndDate.setUTCDate(currentStartDate.getUTCDate() + 1);
      currentEndDate.setUTCHours(5, 0, 0, 0);

      const peakRate = await checkPeakRate(currentStartDate, roomId);

      reservations.push({
        roomId,
        price: peakRate ? peakRate.price : room.price,
        paymentId: payment.id,
        startDate: currentStartDate,
        endDate: currentEndDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await prisma.reservation.createMany({
      data: reservations,
    });

    return {
      payment,
      reservations,
      message: "Reservation Succesfully created.",
    };
  } catch (error) {
    throw error;
  }
};
