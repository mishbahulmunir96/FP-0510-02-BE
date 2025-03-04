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
import {
  deletePropertyImageController,
  getPropertyImageController,
  getPropertyImagesController,
  uploadMultipleImagesController,
  uploadSingleImageController,
} from "../controllers/propertyImage.controller";

const router = Router();

router.post(
  "/property/:propertyId/single",
  verifyToken,
  isTenant,
  uploader().single("image"),
  uploadSingleImageController
);

// Multiple images upload
router.post(
  "/property/:property Id/multiple",
  verifyToken,
  isTenant,
  uploader().array("images", 10),
  uploadMultipleImagesController
);

router.get("/property/:propertyId", getPropertyImagesController);
router.get("/:imageId", getPropertyImageController);
router.delete(
  "/:imageId",
  verifyToken,
  isTenant,
  deletePropertyImageController
);

export default router;
