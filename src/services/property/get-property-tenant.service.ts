import prisma from "../../lib/prisma";

export const getPropertyTenantService = async (id: number) => {
  try {
    const property = await prisma.property.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        tenant: true,
        room: {
          include: {
            roomImage: true,
            roomFacility: true,
          },
        },
        propertyImage: true,
        propertyFacility: true,
        review: true,
        propertyCategory: true, // Changed from PropertyCategory to match the schema
      },
    });

    if (!property) {
      throw new Error("Invalid Property id");
    }

    return property;
  } catch (error) {
    throw error;
  }
};
