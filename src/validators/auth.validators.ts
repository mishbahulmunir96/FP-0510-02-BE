import { Request, Response, NextFunction } from "express";
import { body, validationResult, ValidationChain } from "express-validator";

export const validateRegister: (
  | ValidationChain
  | ((req: Request, res: Response, next: NextFunction) => void)
)[] = [
  // Name hanya required untuk tenant
  body("name")
    .if(body("role").equals("TENANT"))
    .trim()
    .notEmpty()
    .withMessage("Name is required for tenant")
    .isString(),

  // Email selalu required
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  // Role opsional, default ke USER
  body("role")
    .optional()
    .customSanitizer((value) => value?.toUpperCase() || "USER")
    .isIn(["USER", "TENANT"])
    .withMessage("Role must be either USER or TENANT"),

  // Validasi data tenant
  body("bankName")
    .if(body("role").equals("TENANT"))
    .notEmpty()
    .withMessage("Bank name is required for tenant"),

  body("bankNumber")
    .if(body("role").equals("TENANT"))
    .notEmpty()
    .withMessage("Bank number is required for tenant"),

  body("phoneNumber")
    .if(body("role").equals("TENANT"))
    .notEmpty()
    .withMessage("Phone number is required for tenant"),

  // Middleware untuk handling error
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
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
export const validateLogin = [
  body("email").notEmpty().withMessage("Email is required").isEmail(),
  body("password").notEmpty().withMessage("Password is required"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ message: errors.array()[0].msg });
      return;
    }
    next();
  },
];

export const validateForgotPassword = [
  body("email").notEmpty().withMessage("Email is required").isEmail(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ message: errors.array()[0].msg });
      return;
    }
    next();
  },
];

export const validateResetPassword = [
  body("password").notEmpty().withMessage("Password is required"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ message: errors.array()[0].msg });
      return;
    }
    next();
  },
];
