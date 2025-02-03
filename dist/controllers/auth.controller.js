"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithGoogleController = exports.resetPasswordController = exports.forgotPasswordController = exports.verifyController = exports.registerController = exports.loginController = void 0;
const register_service_1 = require("../services/auth/register.service");
const verify_service_1 = require("../services/auth/verify.service");
const login_service_1 = require("../services/auth/login.service");
const forgot_password_service_1 = require("../services/auth/forgot-password.service");
const reset_password_service_1 = require("../services/auth/reset-password.service");
const google_service_1 = require("../services/auth/google.service");
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, login_service_1.loginService)(req.body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.loginController = loginController;
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, register_service_1.registerService)(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        if (error.status) {
            res.status(error.status).json({
                success: false,
                message: error.message,
            });
        }
        else {
            next(error);
        }
    }
});
exports.registerController = registerController;
const verifyController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, verify_service_1.verifyService)(req.body);
        res.status(200).json({
            success: true,
            message: "Email verified successfully",
        });
    }
    catch (error) {
        if (error.status) {
            res.status(error.status).json({
                success: false,
                message: error.message,
            });
        }
        else {
            next(error);
        }
    }
});
exports.verifyController = verifyController;
const forgotPasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, forgot_password_service_1.forgotPasswordService)(req.body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.forgotPasswordController = forgotPasswordController;
const resetPasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(res.locals.user.id);
        const result = yield (0, reset_password_service_1.resetPasswordService)(userId, req.body.password);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.resetPasswordController = resetPasswordController;
const loginWithGoogleController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, google_service_1.loginWithGoogleService)(req.body.accessToken);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.loginWithGoogleController = loginWithGoogleController;
