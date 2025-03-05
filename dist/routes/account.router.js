"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../controllers/account.controller");
const jwt_1 = require("../lib/jwt");
const multer_1 = require("../lib/multer");
const profilePictureFilter_1 = require("../lib/profilePictureFilter");
const router = (0, express_1.Router)();
router.get("/profile", jwt_1.verifyToken, account_controller_1.getProfileController);
router.get("/tenant", jwt_1.verifyToken, account_controller_1.getTenantController);
// In account.router.ts for the user profile endpoint
router.patch("/", jwt_1.verifyToken, (0, multer_1.uploader)(1).single("imageFile"), profilePictureFilter_1.fileFilterProfile, account_controller_1.updateProfileController);
router.patch("/change-password", jwt_1.verifyToken, account_controller_1.changePasswordController);
router.post("/verify-change-email", account_controller_1.verifyChangeEmailController);
router.post("/change-email", jwt_1.verifyToken, account_controller_1.changeEmailController);
// In account.router.ts
router.patch("/tenant", jwt_1.verifyToken, (0, multer_1.uploader)(1).single("imageFile"), profilePictureFilter_1.fileFilterProfile, account_controller_1.updateTenantProfileController);
exports.default = router;
