import { Router } from "express";

import { isTenant } from "../lib/isTenant";

import { verifyToken } from "../lib/jwt";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryListController,
  getCategoryListController,
  updateCategoryController,
} from "../controllers/category.controller";
const router = Router();
router.get("/", verifyToken, getCategoryListController);
router.get("/list", getAllCategoryListController);

router.post(" /:id", verifyToken, isTenant, createCategoryController);

router.delete("/delete-category/:id", deleteCategoryController);
router.patch("/update-category/:id", updateCategoryController);

export default router;
