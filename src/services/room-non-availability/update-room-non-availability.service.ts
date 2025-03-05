import { areIntervalsOverlapping } from "date-fns";
import prisma from "../../lib/prisma";
import e from "express";

interface UpdateRoomNonAvailabilityBody {
  reason?: string;
  startDate?: Date;
  endDate?: Date;
  roomId?: number;
}

export const updateRoomNonAvailabilityService = async (
  id: number,
  body: Partial<UpdateRoomNonAvailabilityBody>
) => {
  try {
    const existingRecord = await prisma.roomNonAvailability.findUnique({
      where: { id },
    });

    if (!existingRecord) {
      throw new Error("Room Non Availability not found");
    }

    if (body.startDate && body.endDate && body.roomId) {
      const newInterval = {
        start: new Date(body.startDate),
        end: new Date(body.endDate),
      };
      const otherIntervals = await prisma.roomNonAvailability.findMany({
        where: {
          roomId: body.roomId,
          NOT: { id },
          isDeleted: false,
        },
      });

      for (const interval of otherIntervals) {
        const overlap = areIntervalsOverlapping(newInterval, {
          start: new Date(interval.startDate),
          end: new Date(interval.endDate),
        });
        if (overlap) {
          throw new Error(
            "The new non-availability interval overlaps with an existing one"
          );
        }
      }
    }

    const updatedRecord = await prisma.roomNonAvailability.update({
      where: { id },
      data: { ...body },
    });

    return {
      message: "Update Room Non Availability Success",
      data: updatedRecord,
    };
  } catch (error) {
    throw error;
  }
};
