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
exports.updatePropertyService = void 0;
const client_1 = require("../../../prisma/generated/client");
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updatePropertyService = (userId, propertyId, body, files) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Validasi user
        const user = yield prisma_1.default.user.findUnique({
            where: {
                id: userId,
                isDeleted: false,
            },
        });
        if (!user) {
            throw { code: "USER_NOT_FOUND", message: "User not found" };
        }
        if (user.role !== "TENANT") {
            throw { code: "UNAUTHORIZED", message: "User doesn't have access" };
        }
        // 2. Validasi tenant
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                isDeleted: false,
            },
        });
        if (!tenant) {
            throw { code: "TENANT_NOT_FOUND", message: "Tenant not found" };
        }
        // 3. Validasi property
        const currentProperty = yield prisma_1.default.property.findFirst({
            where: {
                id: propertyId,
                tenantId: tenant.id,
                isDeleted: false,
            },
            include: {
                propertyImage: true,
                propertyCategory: true,
            },
        });
        if (!currentProperty) {
            throw { code: "PROPERTY_NOT_FOUND", message: "Property not found" };
        }
        // 4. Upload images if provided
        let imageResults = [];
        if (files && files.length > 0) {
            try {
                imageResults = yield Promise.all(files.map((file) => (0, cloudinary_1.cloudinaryUpload)(file)));
            }
            catch (error) {
                throw {
                    code: "IMAGE_UPLOAD_FAILED",
                    message: "Failed to upload images",
                };
            }
        }
        // 5. Prepare update data
        const updateData = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (body.title && { title: body.title })), (body.slug && { slug: body.slug })), (body.description && { description: body.description })), (body.latitude && { latitude: body.latitude })), (body.longitude && { longitude: body.longitude })), (body.location && { location: body.location })), (body.status && { status: body.status })), (body.propertyCategoryId && {
            propertyCategory: {
                connect: {
                    id: Number(body.propertyCategoryId),
                },
            },
        }));
        // 6. Lakukan transaksi update
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Update property
            const updatedProperty = yield tx.property.update({
                where: { id: propertyId },
                data: updateData,
                include: {
                    propertyImage: true,
                    propertyCategory: true,
                    tenant: {
                        select: {
                            name: true,
                            phoneNumber: true,
                            bankName: true,
                            bankNumber: true,
                        },
                    },
                },
            });
            // Handle image updates if new images provided
            if (files && files.length > 0 && imageResults.length > 0) {
                // If we're replacing all images, first delete existing ones
                if (currentProperty.propertyImage.length > 0) {
                    yield tx.propertyImage.deleteMany({
                        where: { propertyId: propertyId },
                    });
                }
                // Create new image records for each uploaded image
                yield Promise.all(imageResults
                    .filter((result) => result === null || result === void 0 ? void 0 : result.secure_url)
                    .map((result) => tx.propertyImage.create({
                    data: {
                        imageUrl: result.secure_url,
                        propertyId: updatedProperty.id,
                        isDeleted: false,
                    },
                })));
            }
            // Get fresh data after all updates
            const finalProperty = yield tx.property.findUnique({
                where: { id: propertyId },
                include: {
                    propertyImage: true,
                    propertyCategory: true,
                    tenant: {
                        select: {
                            name: true,
                            phoneNumber: true,
                            bankName: true,
                            bankNumber: true,
                        },
                    },
                    room: {
                        where: { isDeleted: false },
                        include: {
                            roomImage: true,
                            roomFacility: true,
                        },
                    },
                    propertyFacility: {
                        where: { isDeleted: false },
                    },
                    review: {
                        include: {
                            user: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                },
            });
            return {
                message: "Update property success",
                data: finalProperty,
            };
        }));
    }
    catch (error) {
        // Handle specific errors
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw { code: "DUPLICATE_SLUG", message: "Slug already exists" };
            }
            throw { code: "DATABASE_ERROR", message: error.message };
        }
        // Handle custom errors
        if (error.code) {
            throw error;
        }
        // Handle unexpected errors
        throw { code: "INTERNAL_SERVER_ERROR", message: "Something went wrong" };
    }
});
exports.updatePropertyService = updatePropertyService;
