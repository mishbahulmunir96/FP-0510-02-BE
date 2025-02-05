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
            where: { id },
        });
        if (!category) {
            throw new Error("Category id not found");
        }
        yield prisma_1.default.propertyCategory.delete({
            where: { id },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCategoryService = deleteCategoryService;
