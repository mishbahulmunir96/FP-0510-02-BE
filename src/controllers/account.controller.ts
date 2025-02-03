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
    // const id = Number(req.params.id);

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
    // tenantId bisa didapat dari params
    const tenantId = Number(req.params.tenantId);
    // body data
    const body = req.body;
    // file dari Multer
    const file = req.file;

    const result = await updateTenantProfileService(body, file, tenantId);
    res.status(200).json(result);
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
    const userId = Number(res.locals.user.id); // pastikan middleware auth set res.locals.user
    const { email } = req.body;

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
    // Misalnya userId dari res.locals.user.id (hasil verifikasi token)
    const userId = Number(res.locals.user.id);
    // Email baru diambil dari body
    const { email } = req.body;

    const result = await verifyChangeEmailService(userId, email);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
