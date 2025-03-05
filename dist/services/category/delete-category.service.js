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
exports.deleteCategoryService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findFirst({
            where: { id, isDeleted: false },
            include: {
                properties: {
                    where: { isDeleted: false },
                },
            },
        });
        if (!category) {
            throw new Error("Category not found");
        }
        // Optional: Check if category has active properties before soft deleting
        if (category.properties.length > 0) {
            throw new Error("Cannot delete category with associated properties");
        }
        // Perform soft delete by updating isDeleted field
        const deletedCategory = yield prisma_1.default.propertyCategory.update({
            where: { id },
            data: { isDeleted: true },
        });
        return {
            message: "Category deleted successfully",
            data: deletedCategory,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCategoryService = deleteCategoryService;
