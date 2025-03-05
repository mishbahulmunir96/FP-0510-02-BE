import { Router } from "express";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";
import {
  createRoomNonAvailabilityController,
  deleteRoomNonAvailabilityController,
  getRoomNonAvailabilitiesController,
  updateRoomNonAvailabilitiyController,
} from "../controllers/roomNonAvailability.service";

const roomNonAvailabilityRouter = Router();

roomNonAvailabilityRouter.get(
  "/",
  verifyToken,
  isTenant,
  getRoomNonAvailabilitiesController
);

roomNonAvailabilityRouter.post(
  "/",
  verifyToken,
  isTenant,
  createRoomNonAvailabilityController
);

roomNonAvailabilityRouter.patch("/:id",
  verifyToken,
  isTenant,
  updateRoomNonAvailabilitiyController
);

roomNonAvailabilityRouter.delete(
  "/non-availability/:id",
  verifyToken,
  isTenant,
  deleteRoomNonAvailabilityController
);

export default roomNonAvailabilityRouter;
