import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface getTransactionsQuery extends PaginationQueryParams {
  startDate?: string;
  endDate?: string;
}
export const getTransactionsByUserService = async (
  userId: number,
  query: getTransactionsQuery
) => {
  try {
    const { page, take, sortBy, sortOrder, startDate, endDate } = query;

    const where = {
      userId,
      ...(startDate && endDate
        ? {
            createdAt: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          }
        : {}),
    };

    const transactions = await prisma.payment.findMany({
      where,
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
                        id: true,
                        name: true,
                        imageUrl: true,
                      },
                    },
                  },
                },
                roomImage: {
                  where: { isDeleted: false },

                  select: {
                    imageUrl: true,
                  },
                },
              },
            },
          },
        },
      },
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
    });

    const count = await prisma.payment.count({
      where: { userId },
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

        const tenant = transaction.reservation[0]?.room.property.tenant;

        return {
          id: transaction.id,
          uuid: transaction.uuid,
          totalPrice: transaction.totalPrice,
          duration: transaction.duration,
          createdAt: transaction.createdAt,
          updatedAt: transaction.updatedAt,
          checkInDate,
          checkOutDate,
          status: transaction.status,
          reservations: transaction.reservation.map((reserv) => ({
            roomType: reserv.room.type,
            propertyTitle: reserv.room.property.title,
            propertyLocation: reserv.room.property.location,
            roomImages: reserv.room.roomImage,
            tenant: tenant
              ? {
                  id: tenant.id,
                  name: tenant.name,
                  imageUrl: tenant.imageUrl,
                }
              : null,
          })),
        };
      }),
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
