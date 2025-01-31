import prisma from "../../lib/prisma";

export const getTransactionByUserService = async (
  id: number,
  userId: number
) => {
  try {
    const transaction = await prisma.payment.findUnique({
      where: { id },
      include: {
        reservation: {
          include: {
            room: {
              include: {
                property: {
                  select: {
                    title: true,
                    location: true,
                  },
                },
                roomImage: {
                  select: {
                    imageUrl: true,
                  },
                },
                roomFacility: {
                  where: {
                    isDeleted: false,
                  },
                  select: {
                    title: true,
                  },
                },
                peakSeasonRate: {
                  where: {
                    isDeleted: false,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!transaction) {
      throw new Error("Invalid transaction id");
    }
    if (transaction.userId !== userId) {
      throw new Error("You do not have permission to view this transaction.");
    }

    const checkInDate =
      transaction.reservation.length > 0
        ? transaction.reservation[0].startDate
        : null;

    const checkOutDate =
      transaction.reservation.length > 0
        ? transaction.reservation[transaction.reservation.length - 1].endDate
        : null;

    return {
      id: transaction.id,
      uuid: transaction.uuid,
      userId: transaction.userId,
      totalPrice: transaction.totalPrice,
      paymentMethode: transaction.paymentMethode,
      status: transaction.status,
      paymentProof: transaction.paymentProof,
      checkInDate,
      checkOutDate,
      duration: transaction.duration,
      updatedAt: transaction.updatedAt,
      reservations: transaction.reservation.map((reserv) => ({
        roomType: reserv.room.type,
        propertyTitle: reserv.room.property.title,
        roomPrice: reserv.room.price,
        propertyLocation: reserv.room.property.location,
        roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
        roomFacilities: reserv.room.roomFacility.map(
          (facility) => facility.title
        ),
      })),
    };
  } catch (error) {
    throw error;
  }
};
