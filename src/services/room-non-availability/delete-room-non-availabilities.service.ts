import prisma from "../../lib/prisma";

export const deleteRoomNonAvailabilityService = async (id: number) => {
  try {
    // Cari record RoomNonAvailability berdasarkan id
    const roomNonAvailability = await prisma.roomNonAvailability.findUnique({
      where: { id },
    });

    if (!roomNonAvailability) {
      throw new Error("Room Non Availability not found");
    }

    // Hapus record secara permanen
    const deletedRecord = await prisma.roomNonAvailability.delete({
      where: { id },
    });

    return {
      message: "Delete Room Non Availability Success",
      data: deletedRecord,
    };
  } catch (error) {
    throw error;
  }
};
