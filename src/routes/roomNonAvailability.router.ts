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
  "/room",
  verifyToken,
  isTenant,
  createRoomNonAvailabilityController
);

roomNonAvailabilityRouter.patch(
  "/room/:id",
  verifyToken,
  isTenant,
  updateRoomNonAvailabilitiyController
);

roomNonAvailabilityRouter.delete(
  "/room/:id",
  verifyToken,
  isTenant,
  deleteRoomNonAvailabilityController
);

export default roomNonAvailabilityRouter;
