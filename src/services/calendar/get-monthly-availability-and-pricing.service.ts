import prisma from "../../lib/prisma";
import { generateCalendarData } from "../../utils/calendar.utils";
import { CalendarData } from "../../types/calendar";

export const getMonthlyAvailabilityAndPricingService = async (
  roomId: number,
  startDate: Date
) => {
  const date = startDate instanceof Date ? startDate : new Date(startDate);
  const endDate = new Date(date);
  endDate.setMonth(date.getMonth() + 1);

  try {
    const room = await prisma.room.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        price: true,
        stock: true,
        peakSeasonRate: {
          where: {
            isDeleted: false,
            AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
          },
          select: {
            price: true,
            startDate: true,
            endDate: true,
          },
        },
        roomNonAvailability: {
          where: {
            isDeleted: false,
            AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
          },
          select: {
            startDate: true,
            endDate: true,
            reason: true,
          },
        },
        reservation: {
          where: {
            AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
          },
          select: {
            startDate: true,
            endDate: true,
          },
        },
      },
    });

    if (!room) {
      throw new Error(`Room with ID ${roomId} not found`);
    }
    const calendarData = generateCalendarData(
      date,
      endDate,
      room.price,
      room.stock,
      room.peakSeasonRate,
      room.roomNonAvailability,
      room.reservation
    );

    return {
      roomId: room.id,
      basePrice: room.price,
      calendar: calendarData,
    };
  } catch (error) {
    console.error("Error in getMonthlyAvailabilityAndPricing:", error);
    throw error;
  }
};
