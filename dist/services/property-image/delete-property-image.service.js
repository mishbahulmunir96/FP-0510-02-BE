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
exports.deletePropertyImageService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deletePropertyImageService = (imageId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if image exists
        const image = yield prisma_1.default.propertyImage.findUnique({
            where: {
                id: imageId,
                isDeleted: false,
            },
            include: {
                property: {
                    include: {
                        tenant: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        if (!image) {
            throw new Error("Property image not found");
        }
        // Verify user is the property owner
        if (image.property.tenant.user.id !== userId) {
            throw new Error("You don't have permission to delete this image");
        }
        // Soft delete the image
        yield prisma_1.default.propertyImage.update({
            where: {
                id: imageId,
            },
            data: {
                isDeleted: true,
            },
        });
        return {
            message: "Property image deleted successfully",
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to delete property image");
    }
});
exports.deletePropertyImageService = deletePropertyImageService;
