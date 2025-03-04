import { Router } from "express";
import {
  createPropertyController,
  deletePropertyController,
  getPropertiesByQueryController,
  getPropertiesController,
  getPropertyController,
  getPropertyTenantController,
  getTenantPropertiesController,
  updatePropertyController,
} from "../controllers/property.controller";
import { isTenant } from "../lib/isTenant";
import { uploader } from "../lib/multer";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/", getPropertiesController);
router.get("/search", getPropertiesByQueryController);
router.get("/tenant", verifyToken, isTenant, getTenantPropertiesController);
router.get("/tenant/:id", getPropertyTenantController);
router.get("/:slug", getPropertyController);
router.get("/search", getPropertiesByQueryController);
router.get("/tenant", verifyToken, isTenant, getTenantPropertiesController);
router.get("/tenant/:id", getPropertyTenantController);
router.post(
  "/",
  verifyToken,
  isTenant,
  uploader().array("imageUrl", 10), // Changed from single to array with max 10 images
  createPropertyController
);
router.patch(
  "/:id",
  verifyToken,
  isTenant,
  uploader().array("imageUrl", 10),
  updatePropertyController
);

router.delete("/:id", verifyToken, isTenant, deletePropertyController);

export default router;
