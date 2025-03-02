import { NextFunction, Request, Response } from "express";
import {
  createMultiplePropertyImagesService,
  createPropertyImageService,
} from "../services/property-image/create-property-image.service";
import {
  getPropertyImageByIdService,
  getPropertyImagesService,
} from "../services/property-image/get-property-image.service";
import { updatePropertyImageService } from "../services/property-image/update-property-image.service";
import { deletePropertyImageService } from "../services/property-image/delete-property-image.service";

export const uploadSingleImageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propertyId = Number(req.params.propertyId);

    if (isNaN(propertyId)) {
      throw new Error("Invalid property ID");
    }

    if (!req.file) {
      throw new Error("No image uploaded");
    }

    const result = await createPropertyImageService(
      propertyId,
      req.file,
      Number(res.locals.user.id)
    );

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const uploadMultipleImagesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propertyId = Number(req.params.propertyId);

    if (isNaN(propertyId)) {
      throw new Error("Invalid property ID");
    }

    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      throw new Error("No images uploaded");
    }

    const result = await createMultiplePropertyImagesService(
      propertyId,
      req.files as Express.Multer.File[],
      Number(res.locals.user.id)
    );

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const getPropertyImagesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propertyId = Number(req.params.propertyId);

    if (isNaN(propertyId)) {
      throw new Error("Invalid property ID");
    }

    const result = await getPropertyImagesService(propertyId);

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getPropertyImageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const imageId = Number(req.params.imageId);

    if (isNaN(imageId)) {
      throw new Error("Invalid image ID");
    }

    const result = await getPropertyImageByIdService(imageId);

    if (!result.data) {
      res.status(404).send({ message: "Property image not found" });
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// src/controllers/property-image/update-property-image.controller.ts

export const updatePropertyImageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const imageId = Number(req.params.imageId);

    if (isNaN(imageId)) {
      throw new Error("Invalid image ID");
    }

    if (!req.file) {
      throw new Error("No image uploaded");
    }

    const result = await updatePropertyImageService(
      imageId,
      req.file,
      Number(res.locals.user.id)
    );

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deletePropertyImageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const imageId = Number(req.params.imageId);

    if (isNaN(imageId)) {
      throw new Error("Invalid image ID");
    }

    const result = await deletePropertyImageService(
      imageId,
      Number(res.locals.user.id)
    );

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
