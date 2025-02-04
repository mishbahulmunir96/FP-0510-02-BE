import express from "express";
import {
  createReviewController,
  getReviewByTransactionController,
  getReviewsController,
} from "../controllers/review.controller";
import { verifyToken } from "../lib/jwt";

const router = express.Router();

router.post("/", verifyToken, createReviewController);
router.get("/property/:propertyId", getReviewsController);
router.get(
  "/transactions/:paymentId",
  verifyToken,
  getReviewByTransactionController
);

export default router;
