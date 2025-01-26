import { NextFunction, Request, Response } from "express";
import { createRoomReservationService } from "../services/transaction/create-room-reservation.service";
import { getTransactionByUserService } from "../services/transaction/get-transaction-by-user.service";
import { uploadPaymentProofService } from "../services/transaction/upload-payment-proof.service";
import prisma from "../lib/prisma";

interface Transaction {
  id: number;
  uuid: string;
  userId: number;
  roomId: number;
  status: string;
  total: number;
  startDate: Date;
  endDate: Date;
  paymentMethode: string;
  paymentProof: string | null;
  snapToken: string | null;
  snapRedirectUrl: string | null;
  expiredAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export const createRoomReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const reservationData = {
      userId,
      roomId: req.body.roomId,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
    };

    const result = await createRoomReservationService(reservationData);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const uploadPaymentProofController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const proofFile = req.file as Express.Multer.File;
    const transactionId = Number(req.params.id);

    if (!proofFile) {
      res.status(400).send("Payment proof is required.");
      return;
    }

    const updatedTransaction = await uploadPaymentProofService({
      transactionId,
      paymentProof: proofFile,
    });

    res.status(200).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

export const getTransactionByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id); // Mengambil ID dari parameter
    const result = await getTransactionByUserService(id); // Memanggil service
    res.status(200).send(result); // Mengembalikan hasil
  } catch (error) {
    next(error); // Menangani kesalahan
  }
};

export const getTransactionsByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const transactions: Transaction[] = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });

    if (transactions.length === 0) {
      throw new Error("No transactions found for this user.");
    }

    const groupedTransactions: {
      [key: string]: {
        id: number;
        uuid: string;
        userId: number;
        roomId: number;
        status: string;
        totalPrice: number;
        createdAt: Date;
        transactions: Transaction[];
      };
    } = {};

    transactions.forEach((transaction) => {
      const key = `${
        transaction.roomId
      }-${transaction.createdAt.toISOString()}`;

      if (!groupedTransactions[key]) {
        groupedTransactions[key] = {
          id: transaction.id,
          uuid: transaction.uuid,
          userId: transaction.userId,
          roomId: transaction.roomId,
          status: transaction.status,
          totalPrice: transaction.total,
          createdAt: transaction.createdAt,
          transactions: [],
        };
      }

      groupedTransactions[key].transactions.push(transaction);
    });

    const result = Object.values(groupedTransactions).map((group) => ({
      id: group.id,
      uuid: group.uuid,
      userId: group.userId,
      roomId: group.roomId,
      status: group.status,
      totalPrice: group.transactions.reduce(
        (sum, trans) => sum + trans.total,
        0
      ),
      startDate: group.transactions[0].startDate,
      endDate: group.transactions[group.transactions.length - 1].endDate,
      createdAt: group.createdAt,
      transactions: group.transactions,
    }));

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
