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
exports.createPropertyService = void 0;
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createPropertyService = (body, file, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, latitude, longitude, slug, title, propertyCategoryId, location, } = body;
        // Check if slug exists
        const existingProperty = yield prisma_1.default.property.findUnique({
            where: { slug },
        });
        if (existingProperty) {
            throw new Error("Slug already exists");
        }
        // Validate user and tenant
        const user = yield prisma_1.default.user.findUnique({
            where: {
                id: userId,
                isDeleted: false,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have permission to create properties");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                isDeleted: false,
            },
        });
        if (!tenant) {
            throw new Error("Tenant profile not found");
        }
        // Upload image if provided
        const imageResult = file ? yield (0, cloudinary_1.cloudinaryUpload)(file) : null;
        // Create property and image in a transaction
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const newProperty = yield tx.property.create({
                data: {
                    description,
                    latitude,
                    longitude,
                    slug,
                    title,
                    // Menggunakan propertyCategoryId sesuai schema
                    propertyCategoryId: Number(propertyCategoryId),
                    location,
                    status: "PUBLISHED",
                    tenant: {
                        connect: { id: tenant.id },
                    },
                },
            });
            if (imageResult === null || imageResult === void 0 ? void 0 : imageResult.secure_url) {
                yield tx.propertyImage.create({
                    data: {
                        imageUrl: imageResult.secure_url,
                        propertyId: newProperty.id,
                    },
                });
            }
            return {
                message: "Property created successfully",
                data: newProperty,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.createPropertyService = createPropertyService;
