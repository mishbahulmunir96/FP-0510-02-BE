import { Request, Response, NextFunction } from "express";
import { createCategoryService } from "../services/category/create-category.service";
import { getCategoriesService } from "../services/category/get-category.service";
import { getAllCategoriesService } from "../services/category/get-all-category.service";
import { deleteCategoryService } from "../services/category/delete-category.service";
import { updateCategoryService } from "../services/category/update-category.service";

export async function createCategoryController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await createCategoryService(
      req.body,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getCategoryListController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 7,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
      propertyCategoryId: parseInt(req.query.propertyCategoryId as string) || 1,
    };

    const result = await getCategoriesService(
      query,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getAllCategoryListController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 7,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "asc",
      search: (req.query.search as string) || "",
      propertyCategoryId: parseInt(req.query.propertyCategoryId as string) || 1,
    };

    const result = await getAllCategoriesService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteCategoryController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await deleteCategoryService(Number(req.params.id));
    res.status(200).send({ message: "Delete category success", result });
  } catch (error) {
    next(error);
  }
}

export async function updateCategoryController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await updateCategoryService(Number(req.params.id), req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}
