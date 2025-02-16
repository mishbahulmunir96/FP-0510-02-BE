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
  "/create",
  verifyToken,
  isTenant,
  createRoomNonAvailabilityController
);

roomNonAvailabilityRouter.patch(
  "/update/:id",
  verifyToken,
  isTenant,
  updateRoomNonAvailabilitiyController
);

roomNonAvailabilityRouter.delete(
  "/:id",
  verifyToken,
  isTenant,
  deleteRoomNonAvailabilityController
);

export default roomNonAvailabilityRouter;
