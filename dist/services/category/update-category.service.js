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
        // Cari kategori yang akan diupdate, pastikan tidak dihapus
        const propertyCategory = yield prisma_1.default.propertyCategory.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: {
                tenant: true,
            },
        });
        if (!propertyCategory) {
            throw new Error("Category not found");
        }
        // Jika nama berbeda dari nama saat ini
        if (name !== propertyCategory.name) {
            // Cek untuk kategori aktif yang memiliki nama yang sama
            const existingActiveCategory = yield prisma_1.default.propertyCategory.findFirst({
                where: {
                    name,
                    tenantId: propertyCategory.tenantId,
                    isDeleted: false,
                    id: { not: id },
                },
            });
            if (existingActiveCategory) {
                throw new Error("Category name already exists for this tenant");
            }
            // Cek juga untuk kategori yang dihapus dengan nama yang sama
            const existingDeletedCategory = yield prisma_1.default.propertyCategory.findFirst({
                where: {
                    name,
                    tenantId: propertyCategory.tenantId,
                    isDeleted: true,
                },
            });
            if (existingDeletedCategory) {
                // Opsi 1: Kembalikan error
                // throw new Error("A deleted category with this name exists. Please choose a different name or restore the deleted category.");
                // Opsi 2: Hapus kategori yang dihapus sebelumnya untuk mengizinkan nama ini
                yield prisma_1.default.propertyCategory.delete({
                    where: { id: existingDeletedCategory.id },
                });
            }
        }
        // Update kategori
        const updatedCategory = yield prisma_1.default.propertyCategory.update({
            where: { id },
            data: { name },
        });
        return {
            message: "Update property category success",
            data: updatedCategory,
        };
    }
    catch (error) {
        // Tangani kasus error spesifik
        if (error instanceof Error) {
            if (error.message.includes("Unique constraint failed")) {
                throw new Error("Category name already exists for this tenant");
            }
            throw error;
        }
        throw error;
    }
});
exports.updateCategoryService = updateCategoryService;
