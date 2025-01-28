// import { Request, Response, NextFunction } from "express";
// import { createRoomReservationService } from "../services/transaction/create-room-reservation.service";
// import { uploadPaymentProofService } from "../services/transaction/upload-payment-proof.service";

// export const createRoomReservationController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const userId = res.locals.user.id;

//     const reservationData = {
//       userId,
//       roomId: req.body.roomId,
//       startDate: new Date(req.body.startDate),
//       endDate: new Date(req.body.endDate),
//     };

//     const result = await createRoomReservationService(reservationData);

//     res.status(201).send(result);
//   } catch (error) {
//     next(error);
//   }
// };

// export const uploadPaymentProofController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const proofFile = req.file as Express.Multer.File;
//     const transactionId = Number(req.params.id);

//     if (!proofFile) {
//       res.status(400).send("Payment proof is required."); // Mengembalikan kesalahan jika file tidak ada
//       return;
//     }

//     const updatedTransaction = await uploadPaymentProofService({
//       transactionId,
//       paymentProof: proofFile,
//     });

//     res.status(200).json(updatedTransaction); // Mengembalikan respon dengan transaksi yang diperbarui
//   } catch (error) {
//     next(error); // Melempar kesalahan ke middleware penanganan kesalahan
//   }
// };
