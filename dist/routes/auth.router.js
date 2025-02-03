"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_validators_1 = require("../validators/auth.validators");
const multer_1 = require("../lib/multer");
const jwt_1 = require("../lib/jwt");
const router = express_1.default.Router();
router.post("/login", auth_validators_1.validateLogin, auth_controller_1.loginController);
router.post("/login/google", auth_controller_1.loginWithGoogleController);
router.post("/register", (0, multer_1.uploader)(2).single("image"), express_1.default.json(), auth_validators_1.validateRegister, auth_controller_1.registerController);
router.post("/verify", auth_controller_1.verifyController);
router.post("/forgot-password", auth_validators_1.validateForgotPassword, auth_controller_1.forgotPasswordController);
router.patch("/reset-password", jwt_1.verifyTokenReset, auth_validators_1.validateResetPassword, auth_controller_1.resetPasswordController);
exports.default = router;
