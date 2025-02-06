import { areIntervalsOverlapping } from "date-fns";
import prisma from "../../lib/prisma";
import { Prisma } from "../../../prisma/generated/client";

interface UpdatePeakSeasonBody {
  price?: number;
  startDate?: Date;
  endDate?: Date;
  roomId?: number;
}

export const updatePeakSeasonRateManagementService = async (
  userId: number,
  id: number,
  body: UpdatePeakSeasonBody
) => {
  try {
    const { price, startDate, endDate, roomId } = body;

    const peakSeason = await prisma.peakSeasonRate.findUnique({
      where: { id },
      include: {
        room: {
          include: {
            property: {
              include: {
                tenant: true,
              },
            },
          },
        },
      },
    });

    if (!peakSeason) {
      throw new Error("Peak Season Rate not found");
    }

    if (peakSeason.room.property.tenant.userId !== userId) {
      throw new Error(
        "Unauthorized: Peak Season Rate does not belong to this tenant"
      );
    }

    if (startDate && endDate) {
      const otherPeakSeasons = await prisma.peakSeasonRate.findMany({
        where: {
          roomId: peakSeason.roomId,
          id: { not: id },
        },
      });

      const inputDate = { start: new Date(startDate), end: new Date(endDate) };

      otherPeakSeasons.forEach((item) => {
        const areOverlap = areIntervalsOverlapping(inputDate, {
          start: new Date(item.startDate),
          end: new Date(item.endDate),
        });
        if (areOverlap) {
          throw new Error(
            "Peak Season Rate already exists for this date range"
          );
        }
      });
    }

    const updatedPeakSeason = await prisma.peakSeasonRate.update({
      where: { id },
      data: body,
    });

    return {
      message: "Peak Season Rate updated successfully",
      data: updatedPeakSeason,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Database error: " + error.message);
    }
    throw error;
  }
};
