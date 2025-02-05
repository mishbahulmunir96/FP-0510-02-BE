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
exports.updateProfileService = void 0;
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updateProfileService = (body, imageFile, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate user exists
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id: userId,
                isDeleted: false,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        let secureUrl;
        // Handle image upload if provided
        if (imageFile) {
            try {
                // Remove old image if exists
                if (user.imageUrl) {
                    yield (0, cloudinary_1.cloudinaryRemove)(user.imageUrl);
                }
                const uploadResult = yield (0, cloudinary_1.cloudinaryUpload)(imageFile);
                secureUrl = uploadResult.secure_url;
            }
            catch (error) {
                throw new Error("Failed to process image upload");
            }
        }
        // Update user data
        const updatedUser = yield prisma_1.default.user.update({
            where: { id: userId },
            data: Object.assign(Object.assign(Object.assign({}, body), (secureUrl && { imageUrl: secureUrl })), { updatedAt: new Date() }),
            select: {
                id: true,
                name: true,
                email: true,
                imageUrl: true,
                isVerified: true,
                role: true,
                provider: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            status: "success",
            message: "Profile updated successfully",
            data: updatedUser,
        };
    }
    catch (error) {
        // Rollback image upload if db update fails
        if (imageFile && error instanceof Error) {
            try {
                yield (0, cloudinary_1.cloudinaryRemove)(imageFile.path);
            }
            catch (_a) {
                // Silent fail on rollback
            }
        }
        if (error instanceof Error) {
            throw new Error(`Failed to update profile: ${error.message}`);
        }
        throw new Error("Internal server error");
    }
});
exports.updateProfileService = updateProfileService;
