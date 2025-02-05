"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReplyReview = exports.validateCreateReview = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).send({ message: errors.array()[0].msg });
        return;
    }
    next();
};
exports.validateCreateReview = [
    (0, express_validator_1.body)("paymentId")
        .notEmpty()
        .withMessage("Payment ID is required")
        .isInt({ min: 1 })
        .withMessage("Payment ID must be a positive integer"),
    (0, express_validator_1.body)("rating")
        .notEmpty()
        .withMessage("Rating is required")
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),
    (0, express_validator_1.body)("review")
        .notEmpty()
        .withMessage("Review text is required")
        .isString()
        .withMessage("Review must be a string")
        .isLength({ min: 2, max: 500 })
        .withMessage("Review must be between 2 and 500 characters"),
    validateResult,
];
exports.validateReplyReview = [
    (0, express_validator_1.body)("replyMessage")
        .notEmpty()
        .withMessage("Reply message is required")
        .isString()
        .withMessage("Reply message must be a string")
        .isLength({ min: 2, max: 500 })
        .withMessage("Reply message must be between 2 and 500 characters")
        .trim()
        .escape(),
    validateResult,
];
