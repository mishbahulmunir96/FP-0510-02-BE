import prisma from "../../lib/prisma";

export const deletePropertyService = async (id: number, userId: number) => {
  try {
    // Cari properti berdasarkan id
    const property = await prisma.property.findUnique({
      where: { id },
    });
    if (!property) {
      throw new Error("Property not found");
    }

    // Validasi user
    const user = await prisma.user.findUnique({
      where: { id: userId, isDeleted: false },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have permission to delete property");
    }

    // Cari tenant yang terkait dengan user
    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    // Pastikan properti yang akan dihapus dimiliki oleh tenant tersebut
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }

    // Cari semua room terkait properti
    const rooms = await prisma.room.findMany({
      where: { propertyId: id },
      select: { id: true },
    });
    const roomIds = rooms.map((room) => room.id);

    // Update soft delete untuk data yang berkaitan dengan room
    await prisma.roomFacility.updateMany({
      where: { roomId: { in: roomIds } },
      data: { isDeleted: true },
    });

    await prisma.roomImage.updateMany({
      where: { roomId: { in: roomIds } },
      data: { isDeleted: true },
    });

    await prisma.roomNonAvailability.updateMany({
      where: { roomId: { in: roomIds } },
      data: { isDeleted: true },
    });

    await prisma.peakSeasonRate.updateMany({
      where: { roomId: { in: roomIds } },
      data: { isDeleted: true },
    });

    // Update soft delete untuk room yang terkait dengan properti
    await prisma.room.updateMany({
      where: { propertyId: id },
      data: { isDeleted: true },
    });

    // Update soft delete untuk data yang berkaitan langsung dengan properti
    await prisma.propertyFacility.updateMany({
      where: { propertyId: id },
      data: { isDeleted: true },
    });

    await prisma.propertyImage.updateMany({
      where: { propertyId: id },
      data: { isDeleted: true },
    });

    // Update soft delete untuk properti itu sendiri
    await prisma.property.update({
      where: { id },
      data: { isDeleted: true },
    });
  } catch (error) {
    throw error;
  }
};
