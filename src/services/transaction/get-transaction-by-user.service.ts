import prisma from "../../lib/prisma";

export const getTransactionByUserService = async (id: number) => {
  try {
    const transaction = await prisma.payment.findUnique({
      where: { id },
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
    });

    if (!transaction) {
      throw new Error("Invalid transaction id");
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
      reservations: transaction.reservation.map((reserv) => ({
        roomType: reserv.room.type,
      })),
    };
  } catch (error) {
    throw error;
  }
};
