import prisma from "../../lib/prisma";

export const deletePropertyService = async (id: number, userId: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        NOT: { isDeleted: true },
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have permission to delete property");
    }
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        NOT: { isDeleted: true },
      },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }
    const property = await prisma.property.findFirst({
      where: {
        id,
        NOT: { isDeleted: true },
      },
    });
    if (!property) {
      throw new Error("Property not found");
    }
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();
      await tx.roomFacility.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });
      await tx.roomImage.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });

      await tx.roomNonAvailability.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });
      await tx.peakSeasonRate.updateMany({
        where: {
          room: {
            propertyId: id,
          },
        },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });

      await tx.room.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });

      await tx.propertyFacility.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });


      await tx.propertyImage.updateMany({
        where: { propertyId: id },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
      });

      await tx.review.updateMany({
        where: { propertyId: id },
        data: {
          updatedAt: currentDate,
        },
      });

      const deletedProperty = await tx.property.update({
        where: { id },
        data: {
          isDeleted: true,
          updatedAt: currentDate,
        },
        include: {
          propertyImage: {
            where: {
              NOT: { isDeleted: true },
            },
          },
          propertyCategory: true,
          room: {
            where: {
              NOT: { isDeleted: true },
            },
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

export const restorePropertyService = async (id: number, userId: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        NOT: { isDeleted: true },
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
        NOT: { isDeleted: true },
      },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const property = await prisma.property.findFirst({
      where: {
        id,
        isDeleted: true,
      },
    });
    if (!property) {
      throw new Error("Deleted property not found");
    }
    if (property.tenantId !== tenant.id) {
      throw new Error("Property doesn't belong to the tenant");
    }
    return await prisma.$transaction(async (tx) => {
      const currentDate = new Date();

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

      const restoredProperty = await tx.property.update({
        where: { id },
        data: {
          isDeleted: false,
          updatedAt: currentDate,
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
