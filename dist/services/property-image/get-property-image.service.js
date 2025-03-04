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
exports.getPropertyImageByIdService = exports.getPropertyImagesService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPropertyImagesService = (propertyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if property exists
        const property = yield prisma_1.default.property.findUnique({
            where: {
                id: propertyId,
                isDeleted: false,
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        // Get all non-deleted images for the property
        const images = yield prisma_1.default.propertyImage.findMany({
            where: {
                propertyId,
                isDeleted: false,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return {
            message: "Property images retrieved successfully",
            data: images,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to get property images");
    }
});
exports.getPropertyImagesService = getPropertyImagesService;
const getPropertyImageByIdService = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield prisma_1.default.propertyImage.findUnique({
            where: {
                id: imageId,
                isDeleted: false,
            },
            include: {
                property: true,
            },
        });
        return {
            message: image ? "Property image found" : "Property image not found",
            data: image,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to get property image");
    }
});
exports.getPropertyImageByIdService = getPropertyImageByIdService;
