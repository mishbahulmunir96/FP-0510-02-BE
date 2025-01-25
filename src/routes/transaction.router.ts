import { Router } from "express";
import {
  createRoomReservationController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { verifyToken } from "../lib/verifyDummy";
import { uploader } from "../lib/multer";

const router = Router();

router.post("/", verifyToken, createRoomReservationController);
router.patch(
  "/:id", // Menggunakan ID transaksi dari URL
  verifyToken,
  uploader().single("paymentProof"), // Menggunakan middleware Multer untuk upload file
  uploadPaymentProofController // Panggil controller untuk mengupload bukti pembayaran
);

export default router;
