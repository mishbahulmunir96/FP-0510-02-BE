import { Router } from "express";
import {
  cancelTransactionByUserController,
  createRoomReservationController,
  getTransactionByUserController,
  getTransactionsByUserController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { fileFilter } from "../lib/fileFilter";
import { uploader } from "../lib/multer";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/", verifyToken, getTransactionsByUserController);
router.get("/:id", verifyToken, getTransactionByUserController);
router.post("/", verifyToken, createRoomReservationController);
router.patch(
  "/:id",
  verifyToken,
  fileFilter,
  uploader().single("paymentProof"),
  uploadPaymentProofController
);
router.patch("/cancel/:id", verifyToken, cancelTransactionByUserController);

export default router;
