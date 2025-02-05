import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getTransactionsByTenantService = async (
  tenantId: number,
  query: PaginationQueryParams
) => {
  try {
    const { page, take, sortBy, sortOrder } = query;

    const transactions = await prisma.payment.findMany({
      where: {
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
                  where: { isDeleted: false },

                  select: {
                    imageUrl: true,
                  },
                },
                roomFacility: {
                  where: { isDeleted: false },

                  select: {
                    title: true,
                    description: true,
                  },
                },
              },
            },
          },
        },
      },
      skip: (page - 1) * take,
      take,
      orderBy: { [sortBy]: sortOrder },
    });

    const count = await prisma.payment.count({
      where: {
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
    });

    return {
      data: transactions.map((transaction) => {
        const checkInDate =
          transaction.reservation.length > 0
            ? transaction.reservation[0].startDate
            : null;

        const checkOutDate =
          transaction.reservation.length > 0
            ? transaction.reservation[transaction.reservation.length - 1]
                .endDate
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
          createdAt: transaction.createdAt,
          updatedAt: transaction.updatedAt,
          reservations: transaction.reservation.map((reserv) => ({
            roomType: reserv.room.type,
            propertyTitle: reserv.room.property.title,
            roomPrice: reserv.price,
            propertyLocation: reserv.room.property.location,
            roomImages: reserv.room.roomImage,
            roomFacilities: reserv.room.roomFacility,
          })),
        };
      }),
      meta: { page, take, total: count },
    };
  } catch (error) {}
};
