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
                    tenant: {
                      select: {
                        name: true,
                        imageUrl: true,
                        phoneNumber: true,
                        bankName: true,
                        bankNumber: true,
                      },
                    },
                    propertyImage: true,
                  },
                },
                roomImage: {
                  where: { isDeleted: false },
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

    let peakSeasonDays = 0;
    let peakSeasonPrice = null;

    for (const reserv of transaction.reservation) {
      if (reserv.price > reserv.room.price) {
        peakSeasonDays++;
        if (!peakSeasonPrice) {
          peakSeasonPrice = reserv.price;
        }
      }
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
      invoiceUrl: transaction.invoiceUrl,
      checkInDate,
      checkOutDate,
      peakSeasonDays: peakSeasonDays > 0 ? peakSeasonDays : undefined,
      peakSeasonPrice: peakSeasonPrice,
      duration: transaction.duration,
      expiredAt: transaction.expiredAt,
      updatedAt: transaction.updatedAt,
      reservations: transaction.reservation.map((reserv) => {
        return {
          roomId: reserv.roomId,
          roomType: reserv.room.type,
          propertyTitle: reserv.room.property.title,
          roomPrice: reserv.price,
          propertyLocation: reserv.room.property.location,
          propertyImages: reserv.room.property.propertyImage.map(
            (image) => image.imageUrl
          ),
          roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
          roomFacilities: reserv.room.roomFacility.map(
            (facility) => facility.title
          ),
          tenant: {
            name: reserv.room.property.tenant.name,
            imageUrl: reserv.room.property.tenant.imageUrl,
            phoneNumber: reserv.room.property.tenant.phoneNumber,
            bankName: reserv.room.property.tenant.bankName,
            bankNumber: reserv.room.property.tenant.bankNumber,
          },
        };
      }),
    };
  } catch (error) {
    throw error;
  }
};
