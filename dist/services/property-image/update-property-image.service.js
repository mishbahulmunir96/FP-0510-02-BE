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
exports.updatePropertyImageService = void 0;
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updatePropertyImageService = (imageId, file, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if image exists
        const existingImage = yield prisma_1.default.propertyImage.findUnique({
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
        if (!existingImage) {
            throw new Error("Property image not found");
        }
        // Verify user is the property owner
        if (existingImage.property.tenant.user.id !== userId) {
            throw new Error("You don't have permission to update this image");
        }
        // Upload new image to cloudinary
        const imageResult = yield (0, cloudinary_1.cloudinaryUpload)(file);
        if (!imageResult || !imageResult.secure_url) {
            throw new Error("Failed to upload image");
        }
        // Update image record in database
        const updatedImage = yield prisma_1.default.propertyImage.update({
            where: {
                id: imageId,
            },
            data: {
                imageUrl: imageResult.secure_url,
            },
        });
        return {
            message: "Property image updated successfully",
            data: updatedImage,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to update property image");
    }
});
exports.updatePropertyImageService = updatePropertyImageService;
