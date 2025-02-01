"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTenant = void 0;
const isTenant = (req, res, next) => {
    const user = res.locals.user;
    if (user && user.role === "TENANT") {
        return next();
    }
    res.status(403).json({
        status: "error",
        message: "Access denied. Only organizers can do this action.",
    });
};
exports.isTenant = isTenant;
