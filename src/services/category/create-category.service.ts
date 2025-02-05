import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const createCategoryService = async (
  body: PropertyCategory,
  userId: number
) => {
  try {
    const { name } = body;

    if (!userId) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.role !== "TENANT") {
      throw new Error("User don't have access");
    }

    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const existingCategory = await prisma.propertyCategory.findFirst({
      where: { name },
    });

    if (existingCategory) {
      throw new Error("Category already exist");
    }

    const newCategory = await prisma.propertyCategory.create({
      data: {
        ...body,
        tenantId: tenant.id,
      },
    });

    return {
      message: "Create property category success",
      data: newCategory,
    };
  } catch (error) {
    throw error;
  }
};
