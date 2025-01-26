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
              select: {
                type: true,
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
      where: { userId }, // Hitung total transaksi untuk user ini
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

        return {
          id: transaction.id,
          uuid: transaction.uuid,
          totalPrice: transaction.totalPrice,
          duration: transaction.duration,
          createdAt: transaction.createdAt,
          updatedAt: transaction.updatedAt,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          reservations: [
            {
              roomType:
                transaction.reservation.length > 0
                  ? transaction.reservation[0].room.type
                  : null,
            },
          ],
        };
      }),
      meta: { page, take, total: count }, // Menambahkan metadata untuk pagination
    };
  } catch (error) {
    throw error;
  }
};
