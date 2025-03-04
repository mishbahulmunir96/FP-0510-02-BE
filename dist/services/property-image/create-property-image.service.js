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
exports.createMultiplePropertyImagesService = exports.createPropertyImageService = void 0;
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createPropertyImageService = (propertyId, file, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if property exists and user has permission
        const property = yield prisma_1.default.property.findUnique({
            where: {
                id: propertyId,
                isDeleted: false,
            },
            include: {
                tenant: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        // Verify user is the property owner
        if (property.tenant.user.id !== userId) {
            throw new Error("You don't have permission to add images to this property");
        }
        // Upload image to cloudinary
        const imageResult = yield (0, cloudinary_1.cloudinaryUpload)(file);
        if (!imageResult || !imageResult.secure_url) {
            throw new Error("Failed to upload image");
        }
        // Create image record in database
        const newImage = yield prisma_1.default.propertyImage.create({
            data: {
                imageUrl: imageResult.secure_url,
                propertyId,
                isDeleted: false,
            },
        });
        return {
            message: "Property image created successfully",
            data: newImage,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to create property image");
    }
});
exports.createPropertyImageService = createPropertyImageService;
const createMultiplePropertyImagesService = (propertyId, files, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if property exists and user has permission
        const property = yield prisma_1.default.property.findUnique({
            where: {
                id: propertyId,
                isDeleted: false,
            },
            include: {
                tenant: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        // Verify user is the property owner
        if (property.tenant.user.id !== userId) {
            throw new Error("You don't have permission to add images to this property");
        }
        // Upload all images to cloudinary
        const uploadPromises = files.map((file) => (0, cloudinary_1.cloudinaryUpload)(file));
        const uploadResults = yield Promise.all(uploadPromises);
        // Filter out failed uploads
        const successfulUploads = uploadResults.filter((result) => result && result.secure_url);
        if (successfulUploads.length === 0) {
            throw new Error("Failed to upload any images");
        }
        // Create image records in database
        const imageCreatePromises = successfulUploads.map((result) => prisma_1.default.propertyImage.create({
            data: {
                imageUrl: result.secure_url,
                propertyId,
                isDeleted: false,
            },
        }));
        const createdImages = yield prisma_1.default.$transaction(imageCreatePromises);
        return {
            message: `${createdImages.length} property images created successfully`,
            data: createdImages,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to create property images");
    }
});
exports.createMultiplePropertyImagesService = createMultiplePropertyImagesService;
