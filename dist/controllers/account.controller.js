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
exports.verifyChangeEmailController = exports.changeEmailController = exports.changePasswordController = exports.updateTenantProfileController = exports.updateProfileController = exports.getTenantController = exports.getProfileController = void 0;
const change_email_service_1 = require("../services/account/change-email.service");
const change_password_service_1 = require("../services/account/change-password.service");
const get_profile_service_1 = require("../services/account/get-profile.service");
const get_tenant_service_1 = require("../services/account/get-tenant.service");
const update_profile_service_1 = require("../services/account/update-profile.service");
const update_tenant_service_1 = require("../services/account/update-tenant.service");
const verify_change_email_service_1 = require("../services/account/verify-change-email.service");
const getProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(res.locals.user.id);
        const result = yield (0, get_profile_service_1.getProfileService)(userId);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getProfileController = getProfileController;
const getTenantController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(res.locals.user.id);
        const result = yield (0, get_tenant_service_1.getTenantService)(userId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getTenantController = getTenantController;
const updateProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, update_profile_service_1.updateProfileService)(req.body, req.file, res.locals.user.id);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateProfileController = updateProfileController;
const updateTenantProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, update_tenant_service_1.updateTenantProfileService)(req.body, req.file, Number(res.locals.user.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateTenantProfileController = updateTenantProfileController;
const changePasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(res.locals.user.id);
        const { oldPassword, newPassword } = req.body;
        const result = yield (0, change_password_service_1.changePasswordService)(userId, {
            password: oldPassword,
            newPassword,
        });
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.changePasswordController = changePasswordController;
const changeEmailController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(res.locals.user.id);
        const { email } = req.body;
        if (!email) {
            throw new Error("Email is required");
        }
        const result = yield (0, change_email_service_1.changeEmailService)(userId, email);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.changeEmailController = changeEmailController;
const verifyChangeEmailController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, password } = req.body;
        if (!token) {
            throw new Error("Token is required");
        }
        if (!password) {
            throw new Error("Password is required");
        }
        const result = yield (0, verify_change_email_service_1.verifyChangeEmailService)({ token, password });
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.verifyChangeEmailController = verifyChangeEmailController;
