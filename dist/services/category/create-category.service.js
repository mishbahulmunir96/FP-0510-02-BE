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
exports.createCategoryService = void 0;
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
            where: { name },
        });
        if (existingCategory) {
            throw new Error("Category already exist");
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
