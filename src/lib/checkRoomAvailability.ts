import { StatusPayment } from "../../prisma/generated/client";
import prisma from "./prisma";

export const checkRoomAvailability = async (
  roomId: number,
  startDate: Date,
  endDate: Date
) => {
  const activeReservations = await prisma.reservation.findMany({
    where: {
      roomId,
      OR: [
        {
          startDate: { lt: endDate },
          endDate: { gt: startDate },
        },
      ],
      payment: {
        status: {
          in: [
            StatusPayment.WAITING_FOR_PAYMENT,
            StatusPayment.WAITING_FOR_PAYMENT_CONFIRMATION,
            StatusPayment.PROCESSED,
            StatusPayment.CHECKED_IN,
          ],
        },
      },
    },
  });

  const nonAvailabilityPeriods = await prisma.roomNonAvailability.findMany({
    where: {
      roomId,
      isDeleted: false,
      OR: [
        {
          startDate: { lt: endDate },
          endDate: { gt: startDate },
        },
      ],
    },
  });

  const room = await prisma.room.findUnique({
    where: { id: roomId },
    select: { stock: true },
  });

  if (!room) {
    throw new Error("Room not found");
  }

  const availableStock = room.stock;
  const bookedRooms = activeReservations.length;

  const isRoomAvailable =
    nonAvailabilityPeriods.length === 0 && bookedRooms < availableStock;

  return isRoomAvailable;
};
