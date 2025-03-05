import prisma from "../../lib/prisma";
import { RoomPriceComparison } from "../../types/calendar";
import {
  getDailyPrices,
  calculateAveragePrice,
} from "../../utils/calendar.utils";

export const compareRoomPricingService = async (
  roomIds: number[],
  startDate: Date,
  endDate: Date
): Promise<RoomPriceComparison[]> => {
  try {
    const rooms = await prisma.room.findMany({
      where: {
        id: { in: roomIds },
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
        type: true,
        price: true,
        propertyId: true,
        peakSeasonRate: {
          where: {
            isDeleted: false,
            AND: [
              { startDate: { lte: endDate } },
              { endDate: { gte: startDate } },
            ],
          },
          select: {
            price: true,
            startDate: true,
            endDate: true,
          },
        },
      },
    });
    const comparisonData = rooms.map((room) => {
      const dailyPrices = getDailyPrices(
        startDate,
        endDate,
        room.price,
        room.peakSeasonRate
      );

      const priceValues = Object.values(dailyPrices);

      return {
        roomId: room.id,
        name: room.name,
        type: room.type,
        propertyId: room.propertyId,
        basePrice: room.price,
        averagePrice: calculateAveragePrice(dailyPrices),
        minimumPrice:
          priceValues.length > 0 ? Math.min(...priceValues) : room.price,
        maximumPrice:
          priceValues.length > 0 ? Math.max(...priceValues) : room.price,
        dailyPrices,
      };
    });

    return comparisonData;
  } catch (error) {
    console.error("Error in compareRoomPricing:", error);
    throw error;
  }
};
