import { NextFunction, Request, Response } from "express";
import { getProfileService } from "../services/account/get-profile.service";
import { updateProfileService } from "../services/account/update-profile.service";
import { changePasswordService } from "../services/account/change-password.service";
import { changeEmailService } from "../services/account/change-email.service";
import { verifyChangeEmailService } from "../services/account/verify-change-email.service";
import { getTenantService } from "../services/account/get-tenant.service";
import { Tenant } from "../../prisma/generated/client";
import { updateTenantProfileService } from "../services/account/update-tenant.service";

export const getProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(res.locals.user.id);
    const result = await getProfileService(userId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getTenantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(res.locals.user.id);
    const result = await getTenantService(userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const result = await updateProfileService(
      req.body,
      files.imageFile?.[0],
      res.locals.user.id
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateTenantProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const result = await updateTenantProfileService(
      req.body,
      files.imageFile?.[0],
      res.locals.user.id
    );
    res.status(200).send(result);

  } catch (error) {
    next(error);
  }
};

export const changePasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(res.locals.user.id);
    const { oldPassword, newPassword } = req.body;

    // Panggil service dengan destructuring
    const result = await changePasswordService(userId, {
      password: oldPassword,
      newPassword,
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const changeEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(res.locals.user.id);
    const { email } = req.body;

    if (!email) {
      throw new Error("Email is required");
    }

    const result = await changeEmailService(userId, email);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const verifyChangeEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, password } = req.body;

    if (!token) {
      throw new Error("Token is required");
    }

    if (!password) {
      throw new Error("Password is required");
    }

    const result = await verifyChangeEmailService({ token, password });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
