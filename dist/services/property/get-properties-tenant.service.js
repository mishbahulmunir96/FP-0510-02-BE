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
exports.getTenantPropertiesService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTenantPropertiesService = (query, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take, page, sortBy, sortOrder, search } = query;
        // Validasi user
        const user = yield prisma_1.default.user.findUnique({
            where: { id: userId },
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
        const whereClause = {
            isDeleted: false,
            tenantId: tenant.id,
        };
        if (search) {
            whereClause.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
            ];
        }
        const properties = yield prisma_1.default.property.findMany({
            where: whereClause,
            skip: (page - 1) * take,
            take: take,
            orderBy: { [sortBy]: sortOrder || "asc" },
            include: {
                propertyImage: { select: { imageUrl: true } },
                review: { select: { rating: true } },
                tenant: { select: { name: true } },
                room: { select: { price: true } },
            },
        });
        const count = yield prisma_1.default.property.count({ where: whereClause });
        return { data: properties, meta: { page, take, total: count } };
    }
    catch (error) {
        throw error;
    }
});
exports.getTenantPropertiesService = getTenantPropertiesService;
