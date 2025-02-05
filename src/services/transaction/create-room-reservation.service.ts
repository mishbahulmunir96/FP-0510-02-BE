import { Payment, StatusPayment } from "../../../prisma/generated/client";
import { checkRoomAvailability } from "../../lib/checkRoomAvailability";
import prisma from "../../lib/prisma";
import schedule from "node-schedule";
import { addMinutes } from "date-fns";
import xendit from "../../lib/xendit";

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

    const isAvailable = await checkRoomAvailability(roomId, startDate, endDate);
    if (!isAvailable) {
      throw new Error("The room is not available on the selected date.");
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      throw new Error("The reservation duration must be at least 1 night.");
    }

    const room = await prisma.room.findUnique({
      where: { id: roomId },
      select: { price: true },
    });

    if (!room || room.price === undefined) {
      throw new Error("Room price not found.");
    }

    let totalPrice = 0;

    for (let i = 0; i < diffDays; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(currentDate.getDate() + i);

      const peakRate = await prisma.peakSeasonRate.findFirst({
        where: {
          roomId: roomId,
          startDate: { lte: currentDate },
          endDate: { gte: currentDate },
          isDeleted: false,
        },
      });

      if (peakRate) {
        totalPrice += peakRate.price;
      } else {
        totalPrice += room.price;
      }
    }

    let payment: Payment;

    if (paymentMethode === "OTOMATIS") {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true },
      });

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
          payerEmail: user?.email,
          description: `Room Reservation for ${diffDays} night(s)`,
          invoiceDuration: "60",
          currency: "IDR",
          // reminderTime: 1,
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

      const expirationTime = addMinutes(new Date(), 1);
      schedule.scheduleJob(Date.now() + 60 * 60 * 1000, async () => {
        await prisma.payment.update({
          where: {
            id: payment.id,
            status: StatusPayment.WAITING_FOR_PAYMENT,
          },
          data: {
            status: StatusPayment.CANCELLED,
            expiredAt: expirationTime,
          },
        });
      });
    }

    const reservations = [];
    for (let i = 0; i < diffDays; i++) {
      const currentStartDate = new Date(start);
      currentStartDate.setDate(currentStartDate.getDate() + i);

      const currentEndDate = new Date(currentStartDate);
      currentEndDate.setDate(currentStartDate.getDate() + 1);

      const peakRate = await prisma.peakSeasonRate.findFirst({
        where: {
          roomId: roomId,
          startDate: { lte: currentStartDate },
          endDate: { gte: currentStartDate },
          isDeleted: false,
        },
      });

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

    return { payment, reservations };
  } catch (error) {
    throw error;
  }
};
