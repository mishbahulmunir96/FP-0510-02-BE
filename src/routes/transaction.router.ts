import { Router } from "express";
import {
  approveTransactionByTenantController,
  cancelTransactionByTenantController,
  cancelTransactionByUserController,
  confirmCheckInController,
  confirmCheckOutController,
  createRoomReservationController,
  getTransactionByTenantController,
  getTransactionByUserController,
  getTransactionsByTenantController,
  getTransactionsByUserController,
  uploadPaymentProofController,
} from "../controllers/transaction.controller";
import { fileFilter } from "../lib/fileFilter";
import { isTenant } from "../lib/isTenant";
import { verifyToken } from "../lib/jwt";
import { uploader } from "../lib/multer";
import { validateCreateReservation } from "../validators/transaction.validators";

const router = Router();

router.get("/", verifyToken, getTransactionsByUserController);
router.get("/tenant", verifyToken, isTenant, getTransactionsByTenantController);
router.get(
  "/tenant/:id",
  verifyToken,
  isTenant,
  getTransactionByTenantController
);
router.get("/:id", verifyToken, getTransactionByUserController);
router.post(
  "/",
  verifyToken,
  validateCreateReservation,
  createRoomReservationController
);
router.patch(
  "/:id",
  verifyToken,
  fileFilter,
  uploader().single("paymentProof"),
  uploadPaymentProofController
);
router.patch("/cancel/:id", verifyToken, cancelTransactionByUserController);
router.patch(
  "/tenant/cancel/:id",
  verifyToken,
  isTenant,
  cancelTransactionByTenantController
);
router.patch(
  "/tenant/:id",
  verifyToken,
  isTenant,
  approveTransactionByTenantController
);
router.patch("/check-in/:id", verifyToken, isTenant, confirmCheckInController);
router.patch(
  "/check-out/:id",
  verifyToken,
  isTenant,
  confirmCheckOutController
);

export default router;
