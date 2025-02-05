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
exports.updateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updateCategoryService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = body;
        const propertyCategory = yield prisma_1.default.propertyCategory.findUnique({
            where: { id },
        });
        if (!propertyCategory) {
            throw new Error("Category not found");
        }
        if (name !== propertyCategory.name) {
            const existingPropertyCategory = yield prisma_1.default.propertyCategory.findFirst({
                where: { name, id: { not: id } },
            });
            if (existingPropertyCategory) {
                throw new Error("Name already exist");
            }
        }
        const updatePropertyCategory = yield prisma_1.default.propertyCategory.update({
            where: { id },
            data: { name },
        });
        return {
            message: "Update property category success",
            data: updatePropertyCategory,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.updateCategoryService = updateCategoryService;
