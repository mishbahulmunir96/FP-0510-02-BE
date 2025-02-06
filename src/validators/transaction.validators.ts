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

export const validateCreateReservation = [
  body("roomId")
    .notEmpty()
    .withMessage("Room ID is required")
    .isInt({ min: 1 })
    .withMessage("Room ID must be a positive integer"),

  body("startDate")
    .notEmpty()
    .withMessage("Check-in date is required")
    .isISO8601()
    .withMessage("Invalid check-in date format")
    .custom((value) => {
      const startDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        throw new Error("Check-in date cannot be in the past");
      }
      return true;
    }),

  body("endDate")
    .notEmpty()
    .withMessage("Check-out date is required")
    .isISO8601()
    .withMessage("Invalid check-out date format")
    .custom((value, { req }) => {
      const endDate = new Date(value);
      const startDate = new Date(req.body.startDate);

      if (endDate <= startDate) {
        throw new Error("Check-out date must be after check-in date");
      }

      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        throw new Error("Minimum stay duration is 1 night");
      }

      if (diffDays > 30) {
        throw new Error("Maximum stay duration is 30 nights");
      }

      return true;
    }),

  validateResult,
];
