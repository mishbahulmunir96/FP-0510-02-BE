import express from "express";
import {
  createReviewController,
  getReviewByTransactionController,
  getReviewsByPropertyController,
  replyReviewController,
} from "../controllers/review.controller";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";

const router = express.Router();

router.post("/", verifyToken, createReviewController);
router.post("/reply/:reviewId", verifyToken, isTenant, replyReviewController);
router.get("/property/:propertyId", getReviewsByPropertyController);
router.get(
  "/transactions/:paymentId",
  verifyToken,
  getReviewByTransactionController
);

export default router;
