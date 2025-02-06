import { areIntervalsOverlapping } from "date-fns";
import prisma from "../../lib/prisma";
import { Prisma } from "../../../prisma/generated/client";

interface CreatePeakSeasonBody {
  price: number;
  startDate: Date;
  endDate: Date;
  roomId: number;
}

export const createPeakSeasonRateManagementService = async (
  userId: number,
  body: CreatePeakSeasonBody
) => {
  try {
    const { price, startDate, endDate, roomId } = body;

    if (new Date(startDate) > new Date(endDate)) {
      throw new Error("Start date must be before end date");
    }

    if (price <= 0) {
      throw new Error("Price must be greater than 0");
    }

    const room = await prisma.room.findFirst({
      where: { id: roomId },
      include: {
        property: {
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!room) {
      throw new Error("Room not found");
    }

    if (room.property.tenant.userId !== userId) {
      throw new Error("Unauthorized: Room does not belong to this tenant");
    }

    const getPeakSeason = await prisma.peakSeasonRate.findMany({
      where: {
        roomId,
        isDeleted: false,
      },
    });

    const inputDate = { start: new Date(startDate), end: new Date(endDate) };

    getPeakSeason.forEach((item) => {
      const areOverlap = areIntervalsOverlapping(inputDate, {
        start: new Date(item.startDate),
        end: new Date(item.endDate),
      });
      if (areOverlap) {
        throw new Error("Peak Season Rate already exists for this date range");
      }
    });

    return await prisma.$transaction(async (tx) => {
      const newPeakSeason = await tx.peakSeasonRate.create({
        data: {
          roomId,
          price,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        },
      });

      return {
        message: "Peak Season Rate created successfully",
        data: newPeakSeason,
      };
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Database error: " + error.message);
    }
    throw error;
  }
};
