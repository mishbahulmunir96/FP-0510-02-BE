import prisma from "./prisma";

export const checkPeakRate = async (currentDate: Date, roomId: number) => {
  const dateToCheck = new Date(currentDate);
  dateToCheck.setUTCHours(0, 0, 0, 0);

  const startOfDay = new Date(dateToCheck);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(dateToCheck);
  endOfDay.setUTCHours(23, 59, 59, 999);

  return await prisma.peakSeasonRate.findFirst({
    where: {
      roomId: roomId,
      startDate: {
        lte: endOfDay,
      },
      endDate: {
        gte: startOfDay,
      },
      isDeleted: false,
    },
  });
};
