"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = createCategoryController;
exports.getCategoryListController = getCategoryListController;
exports.getAllCategoryListController = getAllCategoryListController;
exports.deleteCategoryController = deleteCategoryController;
exports.updateCategoryController = updateCategoryController;
const create_category_service_1 = require("../services/category/create-category.service");
const get_category_service_1 = require("../services/category/get-category.service");
const get_all_category_service_1 = require("../services/category/get-all-category.service");
const delete_category_service_1 = require("../services/category/delete-category.service");
const update_category_service_1 = require("../services/category/update-category.service");
function createCategoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, create_category_service_1.createCategoryService)(req.body, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getCategoryListController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 7,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "desc",
                search: req.query.search || "",
                propertyCategoryId: parseInt(req.query.propertyCategoryId) || 1,
            };
            const result = yield (0, get_category_service_1.getCategoriesService)(query, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getAllCategoryListController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 7,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "asc",
                search: req.query.search || "",
                propertyCategoryId: parseInt(req.query.propertyCategoryId) || 1,
            };
            const result = yield (0, get_all_category_service_1.getAllCategoriesService)(query);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function deleteCategoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, delete_category_service_1.deleteCategoryService)(Number(req.params.id));
            res.status(200).send({ message: "Delete category success", result });
        }
        catch (error) {
            next(error);
        }
    });
}
function updateCategoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, update_category_service_1.updateCategoryService)(Number(req.params.id), req.body);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
