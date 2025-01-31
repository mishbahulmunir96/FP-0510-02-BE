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
exports.getPropertiesController = void 0;
const get_properties_service_1 = require("../services/property/get-properties.service");
const getPropertiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            take: parseInt(req.query.take) || 8,
            page: parseInt(req.query.page) || 1,
            sortBy: req.query.sortBy || "createdAt",
            sortOrder: req.query.sortOrder || "desc",
            search: req.query.search || "",
            guest: Number(req.query.guest) || 2,
            title: req.query.title || "",
            startDate: req.query.startDate || "",
            endDate: req.query.endDate || "",
            location: req.query.location || "",
            category: req.query.category || "",
        };
        const properties = yield (0, get_properties_service_1.getPropertiesService)(query);
        res.status(200).json({
            message: "Success get property list",
            data: properties,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertiesController = getPropertiesController;
