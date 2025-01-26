import { Request, Response, NextFunction } from "express";
import { body, validationResult, ValidationChain } from "express-validator";

export const validateRegister: (
  | ValidationChain
  | ((req: Request, res: Response, next: NextFunction) => void)
)[] = [
  body("name").trim().notEmpty().withMessage("Name is required").isString(),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("role")
    .optional()
    .customSanitizer((value) => value?.toUpperCase())
    .isIn(["USER", "TENANT"])
    .withMessage("Role must be either USER or TENANT"),
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
