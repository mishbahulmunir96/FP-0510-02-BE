import { StatusTransaction } from "../../../prisma/generated/client";
import { checkRoomAvailability } from "../../lib/checkRoomAvailability";
import prisma from "../../lib/prisma";
import schedule from "node-schedule";

interface CreateRoomReservationBody {
  userId: number;
  roomId: number;
  startDate: Date;
  endDate: Date;
}

export const createRoomReservationService = async (
  body: CreateRoomReservationBody
) => {
  const { userId, roomId, startDate, endDate } = body;

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

  const transactions = [];
  for (let i = 0; i < diffDays; i++) {
    const currentStartDate = new Date(start);
    currentStartDate.setDate(currentStartDate.getDate() + i);
    const currentEndDate = new Date(currentStartDate);
    currentEndDate.setDate(currentStartDate.getDate() + 1);

    const peakRate = await prisma.peakSeasonRate.findFirst({
      where: {
        roomId,
        startDate: { lte: currentEndDate },
        endDate: { gte: currentStartDate },
      },
    });

    const total = peakRate ? peakRate.price : room.price;

    transactions.push({
      userId,
      roomId,
      startDate: currentStartDate,
      endDate: currentEndDate,
      total,
      status: StatusTransaction.WAITING_FOR_PAYMENT,
    });
  }

  await prisma.transaction.createMany({
    data: transactions,
  });

  schedule.scheduleJob(Date.now() + 1 * 60 * 60 * 1000, async () => {
    await prisma.transaction.updateMany({
      where: {
        userId,
        status: StatusTransaction.WAITING_FOR_PAYMENT,
      },
      data: {
        status: StatusTransaction.CANCELLED,
      },
    });
  });

  return transactions;
};
