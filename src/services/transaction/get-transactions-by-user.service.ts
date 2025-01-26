import prisma from "../../lib/prisma";

export const getTransactionsByUserService = async (userId: number) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
    });

    if (transactions.length === 0) {
      throw new Error("No transactions found for this user.");
    }

    return transactions;
  } catch (error) {
    throw error;
  }
};
