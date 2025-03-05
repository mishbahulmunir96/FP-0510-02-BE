import prisma from "../../lib/prisma";
import { compareRoomPricingService } from "./compare-room-pricing-service";

export const getPropertyMonthlyPriceComparisonService = async (
  propertyId: number,
  date: Date
) => {
  try {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const rooms = await prisma.room.findMany({
      where: {
        propertyId: propertyId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!rooms || rooms.length === 0) {
      throw new Error(`No rooms found for property with ID ${propertyId}`);
    }

    const roomIds = rooms.map((room) => room.id);

    const comparisonData = await compareRoomPricingService(
      roomIds,
      startDate,
      endDate
    );

    return {
      propertyId: propertyId,
      month: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}`,
      data: comparisonData,
    };
  } catch (error) {
    console.error("Error in getPropertyMonthlyPriceComparison:", error);
    throw error;
  }
};
