"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    (0, express_validator_1.body)("name").trim().notEmpty().withMessage("Name is required").isString(),
    (0, express_validator_1.body)("email").trim().notEmpty().withMessage("Email is required").isEmail(),
    (0, express_validator_1.body)("role")
        .optional()
        .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.toUpperCase())
        .isIn(["USER", "TENANT"])
        .withMessage("Role must be either USER or TENANT"),
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
