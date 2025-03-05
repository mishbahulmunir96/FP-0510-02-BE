import { Router } from "express";
import {
  getRoomsController,
  getRoomsTenantController,
  createRoomController,
  deleteRoomController,
  getRoomController,
  updateRoomController,
} from "../controllers/room.controller";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";
import { uploader } from "../lib/multer";

const roomRouter = Router();

roomRouter.get("/", getRoomsController);
roomRouter.get("/tenant", verifyToken, isTenant, getRoomsTenantController);
roomRouter.post(
  "/room",
  verifyToken,
  isTenant,
  uploader().single("imageUrl"),
  createRoomController
);
roomRouter.delete("/room/:id", verifyToken, isTenant, deleteRoomController);
roomRouter.get("/:id", getRoomController);
roomRouter.patch(
  "/room/:id",
  verifyToken,
  isTenant,
  uploader().single("imageUrl"),
  updateRoomController
);

export default roomRouter;
