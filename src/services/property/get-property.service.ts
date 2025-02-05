import prisma from "../../lib/prisma";

export const getPropertyService = async (slug: string) => {
  try {
    const property = await prisma.property.findFirst({
      where: { slug, isDeleted: false },
      include: {
        tenant: true,
        room: {
          include: {
            roomImage: true,
            roomFacility: true,

            peakSeasonRate: true,
            roomNonAvailability: {
              where: { isDeleted: false },
            },
            reservation: {
              include: { payment: true },
            },
          },
        },
        propertyImage: true,
        propertyFacility: true,
        review: true,
        PropertyCategory: true,
      },
    });

    if (!property) {
      throw new Error("Invalid Property Slug");
    }
    return property;
  } catch (error) {
    throw error;
  }
};
