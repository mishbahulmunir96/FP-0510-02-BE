import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const deletePeakSeasonRateManagementService = async (
  userId: number,
  id: number
) => {
  try {
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

    const deletedPeakSeason = await prisma.peakSeasonRate.delete({
      where: { id },
    });

    return {
      message: "Peak Season Rate deleted successfully",
      data: deletedPeakSeason,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Database error: " + error.message);
    }
    throw error;
  }
};
