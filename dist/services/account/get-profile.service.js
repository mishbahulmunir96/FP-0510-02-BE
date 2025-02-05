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
exports.getProfileService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getProfileService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            select: {
                id: true,
                name: true,
                email: true,
                imageUrl: true,
                isVerified: true,
                role: true,
                provider: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        return {
            status: "success",
            data: user,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to get profile: ${error.message}`);
        }
        throw new Error("Internal server error");
    }
});
exports.getProfileService = getProfileService;
