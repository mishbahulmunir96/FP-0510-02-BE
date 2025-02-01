import { Router } from "express";
import {
  approveTransactionByTenantController,
  cancelTransactionByTenantController,
  cancelTransactionByUserController,
  createRoomReservationController,
  getTransactionByTenantController,
  getTransactionByUserController,
  getTransactionsByTenantController,
  getTransactionsByUserController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { fileFilter } from "../lib/fileFilter";
import { uploader } from "../lib/multer";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";

const router = Router();

router.get("/", verifyToken, getTransactionsByUserController);
router.get("/tenant", verifyToken, isTenant, getTransactionsByTenantController);
router.get("/:id", verifyToken, getTransactionByUserController);
router.get(
  "/tenant/:id",
  verifyToken,
  isTenant,
  getTransactionByTenantController
);
router.post("/", verifyToken, createRoomReservationController);
router.patch(
  "/:id",
  verifyToken,
  fileFilter,
  uploader().single("paymentProof"),
  uploadPaymentProofController
);
router.patch("/cancel/:id", verifyToken, cancelTransactionByUserController);
router.patch(
  "/tenant/:id",
  verifyToken,
  isTenant,
  approveTransactionByTenantController
);
router.patch(
  "/tenant/cancel/:id",
  verifyToken,
  isTenant,
  cancelTransactionByTenantController
);

export default router;
