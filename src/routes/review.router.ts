import express from "express";
import { createReviewController } from "../controllers/review.controller";
import { verifyToken } from "../lib/jwt";

const router = express.Router();

router.post("/", verifyToken, createReviewController);

export default router;
