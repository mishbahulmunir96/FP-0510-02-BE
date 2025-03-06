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
exports.updateTenantProfileService = void 0;
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updateTenantProfileService = (body, imageFile, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: userId,
                isDeleted: false,
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found or already deleted");
        }
        let secureUrl;
        if (imageFile) {
            try {
                if (tenant.imageUrl) {
                    yield (0, cloudinary_1.cloudinaryRemove)(tenant.imageUrl);
                }
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(imageFile);
                secureUrl = secure_url;
            }
            catch (error) {
                throw new Error("Error processing image: " + error.message);
            }
        }
        const updatedTenant = yield prisma_1.default.tenant.update({
            where: { id: tenant.id },
            data: secureUrl
                ? Object.assign(Object.assign({}, body), { imageUrl: secureUrl }) : body,
        });
        return {
            status: 200,
            message: "Tenant profile updated successfully",
            data: updatedTenant,
        };
    }
    catch (error) {

        if (error instanceof Error) {
            throw new Error("Failed to update tenant profile: " + error.message);
        }
        throw new Error("Failed to update tenant profile: An unknown error occurred");
    }
});
exports.updateTenantProfileService = updateTenantProfileService;
