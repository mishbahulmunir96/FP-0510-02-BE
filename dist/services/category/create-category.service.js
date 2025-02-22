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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryByIdService = exports.deleteCategoryService = exports.updateCategoryService = exports.getAllCategoryListService = exports.getCategoryListService = exports.createCategoryService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createCategoryService = (body, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = body;
        if (!userId) {
            throw new Error(`User ${userId} not found`);
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User don't have access");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const existingCategory = yield prisma_1.default.propertyCategory.findFirst({
            where: {
                name,
                tenantId: tenant.id
            },
        });
        if (existingCategory) {
            throw new Error("Category already exist for this tenant");
        }
        const newCategory = yield prisma_1.default.propertyCategory.create({
            data: Object.assign(Object.assign({}, body), { tenantId: tenant.id }),
        });
        return {
            message: "Create property category success",
            data: newCategory,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.createCategoryService = createCategoryService;
const getCategoryListService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!userId) {
            throw new Error(`User ${userId} not found`);
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const categories = yield prisma_1.default.propertyCategory.findMany({
            where: { tenantId: tenant.id },
            include: {
                properties: true,
            },
        });
        return {
            message: "Get category list success",
            data: categories,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getCategoryListService = getCategoryListService;
const getAllCategoryListService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prisma_1.default.propertyCategory.findMany({
            include: {
                properties: true,
                tenant: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
        });
        return {
            message: "Get all category list success",
            data: categories,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getAllCategoryListService = getAllCategoryListService;
const updateCategoryService = (categoryId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findUnique({
            where: { id: categoryId },
        });
        if (!category) {
            throw new Error("Category not found");
        }
        // Check if name is being updated and if it already exists for this tenant
        if (body.name) {
            const existingCategory = yield prisma_1.default.propertyCategory.findFirst({
                where: {
                    name: body.name,
                    tenantId: category.tenantId,
                    id: { not: categoryId }, // Exclude current category
                },
            });
            if (existingCategory) {
                throw new Error("Category name already exists for this tenant");
            }
        }
        const updatedCategory = yield prisma_1.default.propertyCategory.update({
            where: { id: categoryId },
            data: body,
        });
        return {
            message: "Update category success",
            data: updatedCategory,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findUnique({
            where: { id: categoryId },
            include: {
                properties: true,
            },
        });
        if (!category) {
            throw new Error("Category not found");
        }
        // Check if category has associated properties
        if (category.properties.length > 0) {
            throw new Error("Cannot delete category with associated properties");
        }
        yield prisma_1.default.propertyCategory.delete({
            where: { id: categoryId },
        });
        return {
            message: "Delete category success",
        };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCategoryService = deleteCategoryService;
const getCategoryByIdService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findUnique({
            where: { id: categoryId },
            include: {
                properties: true,
                tenant: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
        });
        if (!category) {
            throw new Error("Category not found");
        }
        return {
            message: "Get category detail success",
            data: category,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getCategoryByIdService = getCategoryByIdService;
