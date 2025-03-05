import { NextFunction, Request, Response } from "express";
import { registerService } from "../services/auth/register.service";
import { verifyService } from "../services/auth/verify.service";
import { loginService } from "../services/auth/login.service";
import { forgotPasswordService } from "../services/auth/forgot-password.service";
import { resetPasswordService } from "../services/auth/reset-password.service";
import { loginWithGoogleService } from "../services/auth/google.service";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerService(req.body, req.file);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.status) {
      res.status(error.status).json({
        success: false,
        message: error.message,
      });
    } else {
      next(error);
    }
  }
};

export const verifyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await verifyService(req.body);
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error: any) {
    if (error.status) {
      res.status(error.status).json({
        success: false,
        message: error.message,
      });
    } else {
      next(error);
    }
  }
};

export const forgotPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await forgotPasswordService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const resetPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(res.locals.user.id);
    const result = await resetPasswordService(userId, req.body.password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const loginWithGoogleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginWithGoogleService(req.body.accessToken);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
