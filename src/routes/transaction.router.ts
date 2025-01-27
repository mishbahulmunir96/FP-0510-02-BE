import { Router } from "express";
import {
  createRoomReservationController,
  getTransactionByUserController,
  getTransactionsByUserController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { fileFilter } from "../lib/fileFilter";
import { uploader } from "../lib/multer";
import { verifyTokenDummy } from "../lib/jwtDummy";

const router = Router();

router.get("/", verifyTokenDummy, getTransactionsByUserController);
router.get("/:id", verifyTokenDummy, getTransactionByUserController);
router.post("/", verifyTokenDummy, createRoomReservationController);
router.patch(
  "/:id",
  verifyTokenDummy,
  fileFilter,
  uploader().single("paymentProof"),
  uploadPaymentProofController
);

export default router;
