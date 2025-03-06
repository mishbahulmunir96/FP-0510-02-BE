import { Request, Response, NextFunction } from "express";
import { getPropertiesService } from "../services/property/get-properties.service";
import { getPropertyService } from "../services/property/get-property.service";
import { createPropertyService } from "../services/property/create-property.service";
import { updatePropertyService } from "../services/property/update-property.service";
import { deletePropertyService } from "../services/property/delete-property.service";
import { getTenantPropertiesService } from "../services/property/get-properties-tenant.service";
import { getPropertiesServiceByQuery } from "../services/property/get-properties-by-query.service";
import { getPropertyTenantService } from "../services/property/get-property-tenant.service";

export const getPropertiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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

export async function getTenantPropertiesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
      guest: req.query.guest ? Number(req.query.guest) : 2,
      title: (req.query.title as string) || "",
      startDate: req.query.startDate
        ? new Date(req.query.startDate as string)
        : undefined,
      endDate: req.query.endDate
        ? new Date(req.query.endDate as string)
        : undefined,
    };

    const result = await getTenantPropertiesService(
      query,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getPropertiesByQueryController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
      guest: req.query.guest ? Number(req.query.guest) : 2,
      title: (req.query.title as string) || "",
      startDate: req.query.startDate
        ? new Date(req.query.startDate as string)
        : undefined,
      endDate: req.query.endDate
        ? new Date(req.query.endDate as string)
        : undefined,
    };

    const result = await getPropertiesServiceByQuery(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export const getPropertyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { slug } = req.params;
    const result = await getPropertyService(slug);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export async function getPropertyTenantController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const propertyId = Number(req.params.id);
    const result = await getPropertyTenantService(propertyId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export const createPropertyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createPropertyService(
      req.body,
      req.files as Express.Multer.File[],
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
      req.files as Express.Multer.File[]
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
