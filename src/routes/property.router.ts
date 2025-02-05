import { Router } from "express";
import {
  createPropertyController,
  deletePropertyController,
  getPropertiesController,
  getPropertyController,
  updatePropertyController,
} from "../controllers/property.controller";
import { isTenant } from "../lib/isTenant";
import { uploader } from "../lib/multer";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/", getPropertiesController);
router.get("/:slug", getPropertyController);
router.post(
  "/create-property",
  verifyToken,
  isTenant,
  uploader().single("imageUrl"),
  createPropertyController
);
router.patch(
  "/update-property/:id",
  verifyToken,
  isTenant,
  uploader().single("imageUrl"),
  updatePropertyController
);

router.delete("/delete/:id", verifyToken, isTenant, deletePropertyController);

export default router;
