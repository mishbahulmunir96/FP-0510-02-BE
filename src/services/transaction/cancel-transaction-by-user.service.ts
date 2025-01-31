import prisma from "../../lib/prisma";

export const cancelTransactionByUserService = async (
  paymentId: number,
  userId: number
) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new Error("Transaction not found.");
    }

    if (payment.status === "CANCELLED") {
      throw new Error("Transaction has already been cancelled.");
    }

    if (payment.status !== "WAITING_FOR_PAYMENT") {
      throw new Error(
        "Cannot cancel a transaction that has already been paid."
      );
    }

    if (payment.userId !== userId) {
      throw new Error("You are not allowed to cancel this transaction.");
    }

    const cancelledTransaction = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: "CANCELLED",
      },
    });

    return cancelledTransaction;
  } catch (error) {
    throw error;
  }
};
