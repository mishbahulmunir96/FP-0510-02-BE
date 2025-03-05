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
exports.getAllCategoriesService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getAllCategoriesService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take, page, sortBy, sortOrder, search } = query;
        const whereClause = {
            isDeleted: false, // Added this line to filter out deleted categories
        };
        if (search) {
            whereClause.name = { contains: search };
        }
        const categories = yield prisma_1.default.propertyCategory.findMany({
            where: whereClause,
            skip: (page - 1) * take,
            take: take,
            orderBy: { [sortBy]: sortOrder },
        });
        if (!categories) {
            throw new Error("Categories not found");
        }
        const count = yield prisma_1.default.propertyCategory.count({
            where: whereClause,
        });
        return {
            data: categories,
            meta: { page, take, total: count },
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getAllCategoriesService = getAllCategoriesService;
