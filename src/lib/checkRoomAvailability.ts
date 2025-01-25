import prisma from "./prisma";

export const checkRoomAvailability = async (
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
