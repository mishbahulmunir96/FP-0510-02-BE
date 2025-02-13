import { differenceInDays } from "date-fns";
import prisma from "../../lib/prisma";

export const getTransactionByTenantService = async (
  id: number,
  tenantId: number
) => {
  try {
    const transaction = await prisma.payment.findFirst({
      where: {
        id,
        reservation: {
          some: {
            room: {
              property: {
                tenantId,
              },
            },
          },
        },
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
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
                  where: {
                    isDeleted: false,
                  },
                  select: {
                    imageUrl: true,
                  },
                },
                roomFacility: {
                  where: { isDeleted: false },
                  select: { title: true },
                },
                peakSeasonRate: {
                  where: { isDeleted: false },
                  select: {
                    price: true,
                    startDate: true,
                    endDate: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!transaction) {
      throw new Error("Transaction not found");
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
      customer: transaction.user,
      totalPrice: transaction.totalPrice,
      paymentMethode: transaction.paymentMethode,
      status: transaction.status,
      paymentProof: transaction.paymentProof,
      checkInDate,
      checkOutDate,
      duration: transaction.duration,
      updatedAt: transaction.updatedAt,
      reservations: transaction.reservation.map((reserv) => {
        const peakSeason = reserv.room.peakSeasonRate.find(
          (peak) =>
            reserv.startDate <= peak.endDate && reserv.endDate >= peak.startDate
        );

        let peakSeasonDays = 0;
        if (peakSeason) {
          const overlapStart = new Date(
            Math.max(reserv.startDate.getTime(), peakSeason.startDate.getTime())
          );
          const overlapEnd = new Date(
            Math.min(reserv.endDate.getTime(), peakSeason.endDate.getTime())
          );
          peakSeasonDays = differenceInDays(overlapEnd, overlapStart);
        }

        return {
          roomType: reserv.room.type,
          propertyTitle: reserv.room.property.title,
          roomPrice: reserv.price,
          propertyLocation: reserv.room.property.location,
          roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
          roomFacilities: reserv.room.roomFacility.map(
            (facility) => facility.title
          ),
          peakSeasonDays,
          peakSeasonPrice: peakSeason?.price || null,
        };
      }),
    };
  } catch (error) {
    throw error;
  }
};
