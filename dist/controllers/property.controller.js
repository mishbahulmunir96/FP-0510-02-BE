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
exports.createPropertyController = exports.getPropertyController = exports.getPropertiesController = void 0;
exports.getTenantPropertiesController = getTenantPropertiesController;
exports.getPropertiesByQueryController = getPropertiesByQueryController;
exports.getPropertyTenantController = getPropertyTenantController;
exports.updatePropertyController = updatePropertyController;
exports.deletePropertyController = deletePropertyController;
const get_properties_service_1 = require("../services/property/get-properties.service");
const get_property_service_1 = require("../services/property/get-property.service");
const create_property_service_1 = require("../services/property/create-property.service");
const update_property_service_1 = require("../services/property/update-property.service");
const delete_property_service_1 = require("../services/property/delete-property.service");
const get_properties_tenant_service_1 = require("../services/property/get-properties-tenant.service");
const get_properties_by_query_service_1 = require("../services/property/get-properties-by-query.service");
const get_property_tenant_service_1 = require("../services/property/get-property-tenant.service");
const getPropertiesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            take: parseInt(req.query.take) || 8,
            page: parseInt(req.query.page) || 1,
            sortBy: req.query.sortBy || "createdAt",
            sortOrder: req.query.sortOrder || "desc",
            search: req.query.search || "",
            guest: req.query.guest ? Number(req.query.guest) : undefined,
            startDate: req.query.startDate
                ? req.query.startDate
                : undefined,
            endDate: req.query.endDate ? req.query.endDate : undefined,
            location: req.query.location || undefined,
            category: req.query.category || undefined,
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
function getTenantPropertiesController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 10,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "desc",
                search: req.query.search || "",
                guest: req.query.guest ? Number(req.query.guest) : 2,
                title: req.query.title || "",
                startDate: req.query.startDate
                    ? new Date(req.query.startDate)
                    : undefined,
                endDate: req.query.endDate
                    ? new Date(req.query.endDate)
                    : undefined,
            };
            const result = yield (0, get_properties_tenant_service_1.getTenantPropertiesService)(query, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getPropertiesByQueryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 10,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "desc",
                search: req.query.search || "",
                guest: req.query.guest ? Number(req.query.guest) : 2,
                title: req.query.title || "",
                startDate: req.query.startDate
                    ? new Date(req.query.startDate)
                    : undefined,
                endDate: req.query.endDate
                    ? new Date(req.query.endDate)
                    : undefined,
            };
            const result = yield (0, get_properties_by_query_service_1.getPropertiesServiceByQuery)(query);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
const getPropertyController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { slug } = req.params;
        const result = yield (0, get_property_service_1.getPropertyService)(slug);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertyController = getPropertyController;
function getPropertyTenantController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyId = Number(req.params.id);
            const result = yield (0, get_property_tenant_service_1.getPropertyTenantService)(propertyId);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
const createPropertyController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, create_property_service_1.createPropertyService)(req.body, req.files, Number(res.locals.user.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createPropertyController = createPropertyController;
function updatePropertyController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, update_property_service_1.updatePropertyService)(Number(res.locals.user.id), Number(req.params.id), req.body, req.files);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function deletePropertyController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyId = Number(req.params.id);
            const userId = Number(res.locals.user.id);
            yield (0, delete_property_service_1.deletePropertyService)(propertyId, userId);
            res.status(200).json({ message: "Property deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    });
}
