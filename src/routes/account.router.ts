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
router.patch("/change-password", verifyToken, changePasswordController);
router.post("/verify-change-email", verifyChangeEmailController);
router.post("/change-email", verifyToken, changeEmailController);

// Move parameter route last
router.patch(
  "/tenant",
  verifyToken,
  uploader(1).single("imageFile"),
  fileFilterProfile,
  updateTenantProfileController
);

export default router;
