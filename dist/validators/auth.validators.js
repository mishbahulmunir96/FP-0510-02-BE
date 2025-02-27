"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResetPassword = exports.validateForgotPassword = exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    // Name hanya required untuk tenant
    (0, express_validator_1.body)("name")
        .if((0, express_validator_1.body)("role").equals("TENANT"))
        .trim()
        .notEmpty()
        .withMessage("Name is required for tenant")
        .isString(),
    // Email selalu required
    (0, express_validator_1.body)("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),
    // Role opsional, default ke USER
    (0, express_validator_1.body)("role")
        .optional()
        .customSanitizer((value) => (value === null || value === void 0 ? void 0 : value.toUpperCase()) || "USER")
        .isIn(["USER", "TENANT"])
        .withMessage("Role must be either USER or TENANT"),
    // Validasi data tenant
    (0, express_validator_1.body)("bankName")
        .if((0, express_validator_1.body)("role").equals("TENANT"))
        .notEmpty()
        .withMessage("Bank name is required for tenant"),
    (0, express_validator_1.body)("bankNumber")
        .if((0, express_validator_1.body)("role").equals("TENANT"))
        .notEmpty()
        .withMessage("Bank number is required for tenant"),
    (0, express_validator_1.body)("phoneNumber")
        .if((0, express_validator_1.body)("role").equals("TENANT"))
        .notEmpty()
        .withMessage("Phone number is required for tenant"),
    // Middleware untuk handling error
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg,
            });
        }
        next();
    },
];
// Validasi lainnya tetap sama
exports.validateLogin = [
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email is required").isEmail(),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ message: errors.array()[0].msg });
            return;
        }
        next();
    },
];
exports.validateForgotPassword = [
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email is required").isEmail(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ message: errors.array()[0].msg });
            return;
        }
        next();
    },
];
exports.validateResetPassword = [
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ message: errors.array()[0].msg });
            return;
        }
        next();
    },
];
