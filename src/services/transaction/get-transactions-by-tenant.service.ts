import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getTransactionsByTenantService = async (
  tenantId: number,
  query: PaginationQueryParams
) => {
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
    data: transactions.map((transaction) => ({
      id: transaction.id,
      uuid: transaction.uuid,
      customer: transaction.user,
      totalPrice: transaction.totalPrice,
      status: transaction.status,
      duration: transaction.duration,
      checkIn: transaction.reservation[0]?.startDate,
      checkOut: transaction.reservation[0]?.endDate,
      createdAt: transaction.createdAt,
      reservations: transaction.reservation.map((reserv) => ({
        roomType: reserv.room.type,
        propertyTitle: reserv.room.property.title,
        propertyLocation: reserv.room.property.location,
      })),
    })),
    meta: { page, take, total: count },
  };
};
