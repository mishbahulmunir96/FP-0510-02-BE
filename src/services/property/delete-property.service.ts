import prisma from "../../lib/prisma";

export const deletePropertyService = async (id: number, userId: number) => {
  try {
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

    // Validasi tenant
    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    // Validasi property
    const property = await prisma.property.findUnique({
      where: { id },
    });
    if (!property) {
      throw new Error("Property not found");
    }
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }

    // Lakukan hard delete menggunakan transaction
    return await prisma.$transaction(async (tx) => {
      // 1. Delete semua room facilities
      await tx.roomFacility.deleteMany({
        where: {
          room: {
            propertyId: id,
          },
        },
      });

      // 2. Delete semua room images
      await tx.roomImage.deleteMany({
        where: {
          room: {
            propertyId: id,
          },
        },
      });

      // 3. Delete semua room non-availabilities
      await tx.roomNonAvailability.deleteMany({
        where: {
          room: {
            propertyId: id,
          },
        },
      });

      // 4. Delete semua peak season rates
      await tx.peakSeasonRate.deleteMany({
        where: {
          room: {
            propertyId: id,
          },
        },
      });

      // 5. Delete semua rooms
      await tx.room.deleteMany({
        where: { propertyId: id },
      });

      // 6. Delete property facilities
      await tx.propertyFacility.deleteMany({
        where: { propertyId: id },
      });

      // 7. Delete property images
      await tx.propertyImage.deleteMany({
        where: { propertyId: id },
      });

      // 8. Delete property reviews
      await tx.review.deleteMany({
        where: { propertyId: id },
      });

      // 9. Finally delete the property
      const deletedProperty = await tx.property.delete({
        where: { id },
        include: {
          propertyImage: true,
          propertyCategory: true,
          room: true,
        },
      });

      return {
        message: "Property successfully deleted",
        data: deletedProperty,
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to delete property");
  }
};
