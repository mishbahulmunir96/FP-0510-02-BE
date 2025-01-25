import { Router } from "express";
import { createRoomReservationController } from "../controllers/transaction.controller";
import { verifyToken } from "../lib/verifyDummy";

const router = Router();

router.post("/", verifyToken, createRoomReservationController);

export default router;
