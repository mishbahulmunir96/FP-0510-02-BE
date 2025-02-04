import express from "express";
import {
  createReviewController,
  getReviewsController,
} from "../controllers/review.controller";
import { verifyToken } from "../lib/jwt";

const router = express.Router();

router.post("/", verifyToken, createReviewController);
router.get("/property/:propertyId", getReviewsController);

export default router;
