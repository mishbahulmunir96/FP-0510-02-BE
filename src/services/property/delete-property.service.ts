import prisma from "../../lib/prisma";

export const deletePropertyService = async (id: number, userId: number) => {
  try {
    // Validate user
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        NOT: { isDeleted: true }
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have permission to delete property");
    }

    // Validate tenant
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        NOT: { isDeleted: true }
      },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    // Validate property
    const property = await prisma.property.findFirst({
      where: {
        id,
        NOT: { isDeleted: true }
      },
    });
    if (!property) {
      throw new Error("Property not found");
    }
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }

    // Perform soft delete using transaction
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

      // 1. Soft delete all room facilities
      await tx.roomFacility.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 2. Soft delete all room images
      await tx.roomImage.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 3. Soft delete all room non-availabilities
      await tx.roomNonAvailability.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 4. Soft delete all peak season rates
      await tx.peakSeasonRate.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 5. Soft delete all rooms
      await tx.room.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 6. Soft delete property facilities
      await tx.propertyFacility.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 7. Soft delete property images
      await tx.propertyImage.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
      });

      // 8. Mark property reviews as deleted
      // Note: You might want to keep reviews for historical purposes
      await tx.review.updateMany({
        where: { propertyId: id },
        data: {
          updatedAt: currentDate
        },
      });

      // 9. Finally soft delete the property
      const deletedProperty = await tx.property.update({
        where: { id },
        data: {
          isDeleted: true,
          updatedAt: currentDate
        },
        include: {
          propertyImage: {
            where: {
              NOT: { isDeleted: true }
            }
          },
          propertyCategory: true,
          room: {
            where: {
              NOT: { isDeleted: true }
            }
          },
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

// Optional: Add a service to restore a soft-deleted property
export const restorePropertyService = async (id: number, userId: number) => {
  try {
    // Similar validation as delete
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        NOT: { isDeleted: true }
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have permission to restore property");
    }

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        NOT: { isDeleted: true }
      },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const property = await prisma.property.findFirst({
      where: {
        id,
        isDeleted: true
      },
    });
    if (!property) {
      throw new Error("Deleted property not found");
    }
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }

    // Restore property and related entities
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

      // Restore all related entities
      await Promise.all([
        tx.roomFacility.updateMany({
          where: { room: { propertyId: id } },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.roomImage.updateMany({
          where: { room: { propertyId: id } },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.roomNonAvailability.updateMany({
          where: { room: { propertyId: id } },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.peakSeasonRate.updateMany({
          where: { room: { propertyId: id } },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.room.updateMany({
          where: { propertyId: id },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.propertyFacility.updateMany({
          where: { propertyId: id },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
        tx.propertyImage.updateMany({
          where: { propertyId: id },
          data: { isDeleted: false, updatedAt: currentDate },
        }),
      ]);

      // Finally restore the property
      const restoredProperty = await tx.property.update({
        where: { id },
        data: {
          isDeleted: false,
          updatedAt: currentDate
        },
        include: {
          propertyImage: true,
          propertyCategory: true,
          room: true,
        },
      });

      return {
        message: "Property successfully restored",
        data: restoredProperty,
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to restore property");
  }
};