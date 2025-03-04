import { Router } from "express";
import { verifyToken } from "../lib/jwt";
import {
  createPeakSeasonRate,
  deletePeakSeasonRate,
  getPeakSeasons,
  updatePeakSeasonRate,
} from "../controllers/peakSeasonRate.controller";
import { isTenant } from "../lib/isTenant";

const router = Router();

router.get("/", verifyToken, isTenant, getPeakSeasons);
router.post("/peak-season", verifyToken, isTenant, createPeakSeasonRate);
router.patch("/peak-season/:id", verifyToken, isTenant, updatePeakSeasonRate);
router.delete("/peak-season/:id", verifyToken, isTenant, deletePeakSeasonRate);

export default router;
