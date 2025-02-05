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
const cloudinary_1 = require("../../lib/cloudinary");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updatePropertyService = (userId, propertyId, body, file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, latitude, longitude, slug, title, propertyCategoryId, } = body;
        // Validasi user
        const user = yield prisma_1.default.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have access");
        }
        // Cari tenant berdasarkan user
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        // Cari properti yang dimiliki tenant
        const currentProperty = yield prisma_1.default.property.findFirst({
            where: { id: propertyId, tenantId: tenant.id },
            include: { propertyImage: true },
        });
        if (!currentProperty) {
            throw new Error("Property not found");
        }
        let secureUrl;
        if (file) {
            const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file);
            secureUrl = secure_url;
        }
        // Lakukan transaksi untuk update properti dan (opsional) update property image
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Update data properti
            const updatedProperty = yield tx.property.update({
                where: { id: propertyId },
                data: {
                    description,
                    latitude,
                    longitude,
                    slug,
                    title,
                    propertyCategoryId,
                },
            });
            // Jika file diunggah, update atau buat record gambar properti
            if (file && secureUrl) {
                if (currentProperty.propertyImage.length > 0) {
                    // Update gambar properti pertama yang ada
                    yield tx.propertyImage.update({
                        where: { id: currentProperty.propertyImage[0].id },
                        data: {
                            imageUrl: secureUrl,
                        },
                    });
                }
                else {
                    // Buat record propertyImage baru jika belum ada gambar
                    yield tx.propertyImage.create({
                        data: {
                            imageUrl: secureUrl,
                            propertyId: updatedProperty.id,
                        },
                    });
                }
            }
            return {
                message: "Update property success",
                data: updatedProperty,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.updatePropertyService = updatePropertyService;
