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
router.post("/", verifyToken, isTenant, createPeakSeasonRate);
router.patch("/:id", verifyToken, isTenant, updatePeakSeasonRate);
router.delete("/:id", verifyToken, isTenant, deletePeakSeasonRate);

export default router;
