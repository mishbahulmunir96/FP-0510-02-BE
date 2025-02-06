import prisma from "../../lib/prisma";

export const deleteRoomService = async (id: number, userId: number) => {
  try {
    // Cari room berdasarkan id
    const room = await prisma.room.findUnique({
      where: { id },
    });

    if (!room) {
      throw new Error("Room not found");
    }

    const property = await prisma.property.findUnique({
      where: { id: room.propertyId },
    });
    if (property?.tenantId !== userId) {
      throw new Error("You don't have permission to delete this room");
    }

    // Soft delete data yang terkait dengan room

    // Update soft delete untuk fasilitas ruangan
    await prisma.roomFacility.updateMany({
      where: { roomId: id },
      data: { isDeleted: true },
    });

    // Update soft delete untuk gambar ruangan
    await prisma.roomImage.updateMany({
      where: { roomId: id },
      data: { isDeleted: true },
    });

    // Update soft delete untuk data non-availability ruangan
    await prisma.roomNonAvailability.updateMany({
      where: { roomId: id },
      data: { isDeleted: true },
    });

    // Update soft delete untuk tarif musim puncak ruangan
    await prisma.peakSeasonRate.updateMany({
      where: { roomId: id },
      data: { isDeleted: true },
    });

    // Soft delete room itu sendiri
    await prisma.room.update({
      where: { id },
      data: { isDeleted: true },
    });
  } catch (error) {
    throw error;
  }
};
