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
exports.restoreCategoryService = exports.deleteCategoryService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findFirst({
            where: {
                id,
                isDeleted: false // Only find non-deleted categories
            },
        });
        if (!category) {
            throw new Error("Category not found or already deleted");
        }
        // Perform soft delete by updating isDeleted flag
        const updatedCategory = yield prisma_1.default.propertyCategory.update({
            where: { id },
            data: {
                isDeleted: true,
                updatedAt: new Date() // Update the timestamp
            },
        });
        return updatedCategory;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCategoryService = deleteCategoryService;
// Optional: Add a service to restore soft-deleted categories
const restoreCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.default.propertyCategory.findFirst({
            where: {
                id,
                isDeleted: true // Only find deleted categories
            },
        });
        if (!category) {
            throw new Error("Deleted category not found");
        }
        // Restore the category by setting isDeleted to false
        const restoredCategory = yield prisma_1.default.propertyCategory.update({
            where: { id },
            data: {
                isDeleted: false,
                updatedAt: new Date()
            },
        });
        return restoredCategory;
    }
    catch (error) {
        throw error;
    }
});
exports.restoreCategoryService = restoreCategoryService;
