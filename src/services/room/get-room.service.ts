import prisma from "../../lib/prisma";

export const getRoomService = async (id: number) => {
  try {
    const room = await prisma.room.findFirst({
      where: { id, isDeleted: false },
      include: {
        roomFacility: true,
        roomImage: true,
        roomNonAvailability: true,
        peakSeasonRate: true,
        reservation: {
          include: {
            payment: true,
          },
        },
        property: true,
      },
    });

    if (!room) {
      throw new Error("Invalid room id");
    }
    return room;
  } catch (error) {
    throw error;
  }
};
