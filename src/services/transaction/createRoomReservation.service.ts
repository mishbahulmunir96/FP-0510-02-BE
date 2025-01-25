import { StatusTransaction } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

interface CreateRoomReservationBody {
  userId: number;
  roomId: number;
  startDate: Date;
  endDate: Date;
}

const checkRoomAvailability = async (
  roomId: number,
  startDate: Date,
  endDate: Date
) => {
  const reservations = await prisma.transaction.findMany({
    where: {
      roomId,
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

  const availableStock = room?.stock || 0;
  const bookedRooms = reservations.length;

  const isRoomAvailable = bookedRooms < availableStock;

  return isRoomAvailable;
};

export const createRoomReservationService = async (
  body: CreateRoomReservationBody
) => {
  const { userId, roomId, startDate, endDate } = body;

  const isAvailable = await checkRoomAvailability(roomId, startDate, endDate);
  if (!isAvailable) {
    throw new Error("Kamar tidak tersedia pada tanggal yang dipilih.");
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    throw new Error("Durasi reservasi harus minimal 1 malam.");
  }

  const room = await prisma.room.findUnique({
    where: { id: roomId },
    select: { price: true },
  });

  if (!room || room.price === undefined) {
    throw new Error("Harga ruangan tidak ditemukan.");
  }

  const transactions = [];

  for (let i = 0; i < diffDays; i++) {
    const currentStartDate = new Date(start);
    currentStartDate.setDate(currentStartDate.getDate() + i);

    const currentEndDate = new Date(currentStartDate);
    currentEndDate.setDate(currentStartDate.getDate() + 1);

    transactions.push({
      userId,
      roomId,
      startDate: currentStartDate,
      endDate: currentEndDate,
      total: room.price,
      status: StatusTransaction.WAITING_FOR_PAYMENT,
    });
  }

  await prisma.transaction.createMany({
    data: transactions,
  });

  return transactions;
};
