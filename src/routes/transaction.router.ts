import { Router } from "express";
import {
  createRoomReservationController,
  getTransactionByUserController,
  getTransactionsByUserController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { fileFilter } from "../lib/fileFilter";
import { uploader } from "../lib/multer";
import { verifyToken } from "../lib/verifyDummy";

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

export default router;
