import { Prisma } from "@prisma/client";
import { areIntervalsOverlapping } from "date-fns";
import prisma from "../../lib/prisma";

interface CreateRoomNonAvailabilityBody {
  reason: string;
  startDate: Date;
  endDate: Date;
  roomId: number;
}

export const createRoomNonAvailabilityService = async (
  userId: number,
  body: CreateRoomNonAvailabilityBody
) => {
  try {
    const { reason, startDate, endDate, roomId } = body;

    // Validasi user
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Validasi adanya non-availability yang tumpang tindih
    const existingNonAvailabilities = await prisma.roomNonAvailability.findMany(
      {
        where: { roomId },
      }
    );

    const inputInterval = {
      start: new Date(startDate),
      end: new Date(endDate),
    };

    existingNonAvailabilities.forEach((item) => {
      const overlap = areIntervalsOverlapping(inputInterval, {
        start: new Date(item.startDate),
        end: new Date(item.endDate),
      });
      if (overlap) {
        throw new Error(
          "Room Non Availability for that interval already exists"
        );
      }
    });

    // Validasi room
    const room = await prisma.room.findFirst({
      where: { id: roomId },
    });
    if (!room) {
      throw new Error("Room not found");
    }

    // Buat record RoomNonAvailability dalam transaksi
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const newRoomNonAvailability = await tx.roomNonAvailability.create({
        data: {
          reason,
          roomId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        },
      });

      return {
        message: "Create Room Non Availability success",
        data: newRoomNonAvailability,
      };
    });
  } catch (error) {
    throw error;
  }
};
