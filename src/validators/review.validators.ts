import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ message: errors.array()[0].msg });
    return;
  }

  next();
};

export const validateCreateReview = [
  body("paymentId")
    .notEmpty()
    .withMessage("Payment ID is required")
    .isInt({ min: 1 })
    .withMessage("Payment ID must be a positive integer"),

  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("review")
    .notEmpty()
    .withMessage("Review text is required")
    .isString()
    .withMessage("Review must be a string")
    .isLength({ min: 2, max: 500 })
    .withMessage("Review must be between 2 and 500 characters"),

  validateResult,
];

export const validateReplyReview = [
  body("replyMessage")
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
