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
        // Ambil data kategori yang akan diupdate beserta data tenantnya
        const propertyCategory = yield prisma_1.default.propertyCategory.findUnique({
            where: { id },
            include: {
                tenant: true
            }
        });
        if (!propertyCategory) {
            throw new Error("Category not found");
        }
        // Cek jika nama berbeda dengan yang sebelumnya
        if (name !== propertyCategory.name) {
            // Cek nama yang sama dalam lingkup tenant yang sama
            const existingPropertyCategory = yield prisma_1.default.propertyCategory.findFirst({
                where: {
                    name,
                    tenantId: propertyCategory.tenantId, // Tambahkan pengecekan tenantId
                    id: { not: id }
                },
            });
            if (existingPropertyCategory) {
                throw new Error("Category name already exists for this tenant");
            }
        }
        // Update kategori
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
        // Handle specific error cases
        if (error instanceof Error) {
            if (error.message.includes('Unique constraint failed')) {
                throw new Error("Category name already exists for this tenant");
            }
            throw error;
        }
        throw error;
    }
});
exports.updateCategoryService = updateCategoryService;
