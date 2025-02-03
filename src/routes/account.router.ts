import { Router } from "express";
import {
  changeEmailController,
  changePasswordController,
  getProfileController,
  getTenantController,
  updateProfileController,
  updateTenantProfileController,
  verifyChangeEmailController,
} from "../controllers/account.controller";
import { verifyToken } from "../lib/jwt";
import { uploader } from "../lib/multer";
import { fileFilterProfile } from "../lib/profilePictureFilter";
import { tenantGuard } from "../middlewares/tenantGuard";

const router = Router();

router.get("/profile", verifyToken, getProfileController);
router.get("/tenant", verifyToken, getTenantController);
router.patch(
  "/",
  verifyToken,
  uploader(1).fields([{ name: "imageFile", maxCount: 1 }]),
  fileFilterProfile,
  updateProfileController
);
router.patch(
  "/:tenantId",
  verifyToken,
  uploader(1).single("imageFile"),
  fileFilterProfile,
  updateTenantProfileController
);

router.patch("/change-password", verifyToken, changePasswordController);
router.post("/change-email", verifyToken, changeEmailController);
router.post("/verify-change-email", verifyToken, verifyChangeEmailController);

export default router;
