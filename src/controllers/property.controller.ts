import { Request, Response, NextFunction } from "express";
import { getPropertiesService } from "../services/property/get-properties.service";
import { getPropertyService } from "../services/property/get-property.service";
import { createPropertyService } from "../services/property/create-property.service";
import { updatePropertyService } from "../services/property/update-property.service";
import { deletePropertyService } from "../services/property/delete-property.service";

export const getPropertiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Parsing query parameter dan menetapkan nilai default
    const query = {
      take: parseInt(req.query.take as string) || 8,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
      guest: req.query.guest ? Number(req.query.guest) : undefined,
      startDate: req.query.startDate
        ? (req.query.startDate as string)
        : undefined,
      endDate: req.query.endDate ? (req.query.endDate as string) : undefined,
      location: (req.query.location as string) || undefined,
      category: (req.query.category as string) || undefined,
    };

    const properties = await getPropertiesService(query);

    res.status(200).json({
      message: "Success get property list",
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

export const getPropertyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await getPropertyService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const createPropertyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createPropertyService(
      req.body,
      req.file!,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export async function updatePropertyController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await updatePropertyService(
      Number(res.locals.user.id),
      Number(req.params.id),
      req.body,
      req.file!
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function deletePropertyController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const propertyId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    await deletePropertyService(propertyId, userId);

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    next(error);
  }
}
