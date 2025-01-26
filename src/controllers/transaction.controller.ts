import { NextFunction, Request, Response } from "express";
import { createRoomReservationService } from "../services/transaction/create-room-reservation.service";
// import { getTransactionByUserService } from "../services/transaction/get-transaction-by-user.service";
import { uploadPaymentProofService } from "../services/transaction/upload-payment-proof.service";
import { getTransactionsByUserService } from "../services/transaction/get-transactions-by-user.service";

// interface Transaction {
//   id: number;
//   uuid: string;
//   userId: number;
//   roomId: number;
//   status: string;
//   total: number;
//   startDate: Date;
//   endDate: Date;
//   paymentMethode: string;
//   paymentProof: string | null;
//   snapToken: string | null;
//   snapRedirectUrl: string | null;
//   expiredAt: Date | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

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
    const paymentId = Number(req.params.id);

    if (!proofFile) {
      res.status(400).send("Payment proof is required.");
      return;
    }

    const updatedTransaction = await uploadPaymentProofService({
      paymentId,
      paymentProof: proofFile,
    });

    res.status(200).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

// export const getTransactionByUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const id = Number(req.params.id); // Mengambil ID dari parameter
//     const result = await getTransactionByUserService(id); // Memanggil service
//     res.status(200).send(result); // Mengembalikan hasil
//   } catch (error) {
//     next(error); // Menangani kesalahan
//   }
// };

export const getTransactionsByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;
    const query = {
      take: parseInt(req.query.take as string) || 10, // Misalnya default 10
      page: parseInt(req.query.page as string) || 1, // Misalnya default 1
      sortBy: (req.query.sortBy as string) || "createdAt", // Kolom untuk di-sort
      sortOrder: (req.query.sortOrder as string) || "desc", // Urutan: asc atau desc
    };

    const result = await getTransactionsByUserService(userId, query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
