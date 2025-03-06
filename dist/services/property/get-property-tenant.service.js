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
exports.getPropertyTenantService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPropertyTenantService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: {
                tenant: true,
                room: {
                    include: {
                        roomImage: true,
                        roomFacility: true,
                    },
                },
                propertyImage: true,
                propertyFacility: true,
                review: true,
                propertyCategory: true,
            },
        });
        if (!property) {
            throw new Error("Invalid Property id");
        }
        return property;
    }
    catch (error) {
        throw error;
    }
});
exports.getPropertyTenantService = getPropertyTenantService;
