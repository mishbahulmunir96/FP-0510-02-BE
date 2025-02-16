import prisma from "../../lib/prisma";

export const deleteRoomService = async (id: number, userId: number) => {
  try {
    // Find room and check if it's not already deleted
    const room = await prisma.room.findFirst({
      where: {
        id,
        NOT: { isDeleted: true }
      },
      include: {
        property: {
          include: {
            tenant: true
          }
        }
      }
    });

    if (!room) {
      throw new Error("Room not found or already deleted");
    }

    // Validate property and tenant ownership
    if (!room.property || room.property.tenant.userId !== userId) {
      throw new Error("You don't have permission to delete this room");
    }

    // Use transaction to ensure all related updates happen atomically
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

      // Update all related entities in parallel for better performance
      await Promise.all([
        // Soft delete room facilities
        tx.roomFacility.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate
          }
        }),

        // Soft delete room images
        tx.roomImage.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate
          }
        }),

        // Soft delete room non-availability dates
        tx.roomNonAvailability.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate
          }
        }),

        // Soft delete peak season rates
        tx.peakSeasonRate.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: true,
            updatedAt: currentDate
          }
        })
      ]);

      // Finally soft delete the room itself
      const deletedRoom = await tx.room.update({
        where: { id },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
        include: {
          roomFacility: {
            where: { NOT: { isDeleted: true } }
          },
          roomImage: {
            where: { NOT: { isDeleted: true } }
          },
          peakSeasonRate: {
            where: { NOT: { isDeleted: true } }
          }
        }
      });

      return {
        message: "Room successfully deleted",
        data: deletedRoom
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to delete room");
  }
};

// Optional: Add a service to restore a soft-deleted room
export const restoreRoomService = async (id: number, userId: number) => {
  try {
    // Find deleted room
    const room = await prisma.room.findFirst({
      where: {
        id,
        isDeleted: true
      },
      include: {
        property: {
          include: {
            tenant: true
          }
        }
      }
    });

    if (!room) {
      throw new Error("Deleted room not found");
    }

    // Validate property and tenant ownership
    if (!room.property || room.property.tenant.userId !== userId) {
      throw new Error("You don't have permission to restore this room");
    }

    // Use transaction to ensure all related updates happen atomically
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

      // Restore all related entities in parallel
      await Promise.all([
        // Restore room facilities
        tx.roomFacility.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate
          }
        }),

        // Restore room images
        tx.roomImage.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate
          }
        }),

        // Restore room non-availability dates
        tx.roomNonAvailability.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate
          }
        }),

        // Restore peak season rates
        tx.peakSeasonRate.updateMany({
          where: { roomId: id },
          data: {
            isDeleted: false,
            updatedAt: currentDate
          }
        })
      ]);

      // Finally restore the room itself
      const restoredRoom = await tx.room.update({
        where: { id },
        data: {
          isDeleted: false,
          updatedAt: currentDate
        },
        include: {
          roomFacility: true,
          roomImage: true,
          peakSeasonRate: true
        }
      });

      return {
        message: "Room successfully restored",
        data: restoredRoom
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to restore room");
  }
};