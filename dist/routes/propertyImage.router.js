"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../lib/jwt");
const isTenant_1 = require("../lib/isTenant");
const multer_1 = require("../lib/multer");
const propertyImage_controller_1 = require("../controllers/propertyImage.controller");
const router = (0, express_1.Router)();
router.post("/property/:propertyId/single", jwt_1.verifyToken, isTenant_1.isTenant, (0, multer_1.uploader)().single("image"), propertyImage_controller_1.uploadSingleImageController);
// Multiple images upload
router.post("/property/:property Id/multiple", jwt_1.verifyToken, isTenant_1.isTenant, (0, multer_1.uploader)().array("images", 10), propertyImage_controller_1.uploadMultipleImagesController);
router.get("/property/:propertyId", propertyImage_controller_1.getPropertyImagesController);
router.get("/:imageId", propertyImage_controller_1.getPropertyImageController);
router.delete("/:imageId", jwt_1.verifyToken, isTenant_1.isTenant, propertyImage_controller_1.deletePropertyImageController);
exports.default = router;
