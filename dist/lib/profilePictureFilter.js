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
exports.fileFilterProfile = void 0;
const file_type_1 = require("file-type");
const fileFilterProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = req.files;
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
        const MAX_FILE_SIZE = 1 * 1024 * 1024;
        for (const fieldName in files) {
            const fileArray = files[fieldName];
            for (const file of fileArray) {
                if (file.size > MAX_FILE_SIZE) {
                    throw new Error(`File size exceeds 1MB limit`);
                }
                const type = yield (0, file_type_1.fromBuffer)(file.buffer);
                if (!type || !allowedTypes.includes(type === null || type === void 0 ? void 0 : type.mime)) {
                    throw new Error(`File type ${type === null || type === void 0 ? void 0 : type.mime} is not allowed. Only .jpg, .jpeg, .png and .gif are allowed`);
                }
            }
        }
        next();
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(400).json({
            status: 400,
            message: errorMessage,
        });
    }
});
exports.fileFilterProfile = fileFilterProfile;
