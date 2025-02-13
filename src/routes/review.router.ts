import express from "express";
import {
  createReviewController,
  getReviewByTenantController,
  getReviewByTransactionController,
  getReviewsByPropertyController,
  getReviewsByRoomController,
  replyReviewController,
} from "../controllers/review.controller";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";
import {
  validateCreateReview,
  validateReplyReview,
} from "../validators/review.validators";

const router = express.Router();

router.post("/", verifyToken, validateCreateReview, createReviewController);
router.post(
  "/reply/:reviewId",
  verifyToken,
  isTenant,
  validateReplyReview,
  replyReviewController
);
router.get("/property/:propertyId", getReviewsByPropertyController);
router.get(
  "/transactions/:paymentId",
  verifyToken,
  getReviewByTransactionController
);
router.get(
  "/tenant/transactions/:paymentId",
  verifyToken,
  getReviewByTenantController
);
router.get("/room/:roomId", getReviewsByRoomController);

export default router;
