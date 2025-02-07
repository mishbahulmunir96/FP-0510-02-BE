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
router.post("/create", verifyToken, isTenant, createPeakSeasonRate);
router.patch("/update/:id", verifyToken, isTenant, updatePeakSeasonRate);
router.delete("/delete/:id", verifyToken, isTenant, deletePeakSeasonRate);

export default router;
