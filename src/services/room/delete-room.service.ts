import prisma from "../../lib/prisma";

export const deleteRoomService = async (id: number, userId: number) => {
  try {
    const room = await prisma.room.findFirst({
      where: {
        id,
        NOT: { isDeleted: true },
      },
      include: {
        property: {
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!room) {
      throw new Error("Room not found or already deleted");
    }
    if (!room.property || room.property.tenant.userId !== userId) {
      throw new Error("You don't have permission to delete this room");
    }
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();
      await Promise.all([
        tx.roomFacility.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate,
          },
        }),

        tx.roomImage.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate,
          },
        }),

        tx.roomNonAvailability.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate,
          },
        }),

        tx.peakSeasonRate.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate,
          },
        }),
      ]);

      const deletedRoom = await tx.room.update({
        where: { id },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
        include: {
          roomFacility: {
            where: { NOT: { isDeleted: true } },
          },
          roomImage: {
            where: { NOT: { isDeleted: true } },
          },
          peakSeasonRate: {
            where: { NOT: { isDeleted: true } },
          },
        },
      });

      return {
        message: "Room successfully deleted",
        data: deletedRoom,
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to delete room");
  }
};

export const restoreRoomService = async (id: number, userId: number) => {
  try {
    const room = await prisma.room.findFirst({
      where: {
        id,
        isDeleted: true,
      },
      include: {
        property: {
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!room) {
      throw new Error("Deleted room not found");
    }

    if (!room.property || room.property.tenant.userId !== userId) {
      throw new Error("You don't have permission to restore this room");
    }

    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

      await Promise.all([
        tx.roomFacility.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate,
          },
        }),

        tx.roomImage.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate,
          },
        }),

        tx.roomNonAvailability.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate,
          },
        }),

        tx.peakSeasonRate.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate,
          },
        }),
      ]);

      const restoredRoom = await tx.room.update({
        where: { id },
        data: {
          isDeleted: false,
          updatedAt: currentDate,
        },
        include: {
          roomFacility: true,
          roomImage: true,
          peakSeasonRate: true,
        },
      });

      return {
        message: "Room successfully restored",
        data: restoredRoom,
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to restore room");
  }
};
