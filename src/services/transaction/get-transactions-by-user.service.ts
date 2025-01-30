import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getTransactionsByUserService = async (
  userId: number,
  query: PaginationQueryParams
) => {
  try {
    const { page, take, sortBy, sortOrder } = query;
    const transactions = await prisma.payment.findMany({
      where: { userId },
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

    if (transactions.length === 0) {
      throw new Error("No transactions found for this user.");
    }

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

        const firstReservation = transaction.reservation[0];

        return {
          id: transaction.id,
          uuid: transaction.uuid,
          totalPrice: transaction.totalPrice,
          duration: transaction.duration,
          createdAt: transaction.createdAt,
          updatedAt: transaction.updatedAt,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          reservations: transaction.reservation.map((reserv) => ({
            roomType: reserv.room.type,
            propertyTitle: reserv.room.property.title,
            propertyLocation: reserv.room.property.location,
          })),
        };
      }),
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
