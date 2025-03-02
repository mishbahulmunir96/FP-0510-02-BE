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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyImageController = exports.updatePropertyImageController = exports.getPropertyImageController = exports.getPropertyImagesController = exports.uploadMultipleImagesController = exports.uploadSingleImageController = void 0;
const create_property_image_service_1 = require("../services/property-image/create-property-image.service");
const get_property_image_service_1 = require("../services/property-image/get-property-image.service");
const update_property_image_service_1 = require("../services/property-image/update-property-image.service");
const delete_property_image_service_1 = require("../services/property-image/delete-property-image.service");
const uploadSingleImageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyId = Number(req.params.propertyId);
        if (isNaN(propertyId)) {
            throw new Error("Invalid property ID");
        }
        if (!req.file) {
            throw new Error("No image uploaded");
        }
        const result = yield (0, create_property_image_service_1.createPropertyImageService)(propertyId, req.file, Number(res.locals.user.id));
        res.status(201).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.uploadSingleImageController = uploadSingleImageController;
const uploadMultipleImagesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyId = Number(req.params.propertyId);
        if (isNaN(propertyId)) {
            throw new Error("Invalid property ID");
        }
        if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
            throw new Error("No images uploaded");
        }
        const result = yield (0, create_property_image_service_1.createMultiplePropertyImagesService)(propertyId, req.files, Number(res.locals.user.id));
        res.status(201).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.uploadMultipleImagesController = uploadMultipleImagesController;
const getPropertyImagesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyId = Number(req.params.propertyId);
        if (isNaN(propertyId)) {
            throw new Error("Invalid property ID");
        }
        const result = yield (0, get_property_image_service_1.getPropertyImagesService)(propertyId);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertyImagesController = getPropertyImagesController;
const getPropertyImageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageId = Number(req.params.imageId);
        if (isNaN(imageId)) {
            throw new Error("Invalid image ID");
        }
        const result = yield (0, get_property_image_service_1.getPropertyImageByIdService)(imageId);
        if (!result.data) {
            res.status(404).send({ message: "Property image not found" });
        }
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertyImageController = getPropertyImageController;
// src/controllers/property-image/update-property-image.controller.ts
const updatePropertyImageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageId = Number(req.params.imageId);
        if (isNaN(imageId)) {
            throw new Error("Invalid image ID");
        }
        if (!req.file) {
            throw new Error("No image uploaded");
        }
        const result = yield (0, update_property_image_service_1.updatePropertyImageService)(imageId, req.file, Number(res.locals.user.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updatePropertyImageController = updatePropertyImageController;
const deletePropertyImageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageId = Number(req.params.imageId);
        if (isNaN(imageId)) {
            throw new Error("Invalid image ID");
        }
        const result = yield (0, delete_property_image_service_1.deletePropertyImageService)(imageId, Number(res.locals.user.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deletePropertyImageController = deletePropertyImageController;
