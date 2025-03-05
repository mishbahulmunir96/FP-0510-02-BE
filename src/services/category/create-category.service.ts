import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

// src/services/category/create-category.service.ts
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

    // Cek apakah kategori dengan nama yang sama sudah ada tapi dihapus
    const deletedCategory = await prisma.propertyCategory.findFirst({
      where: {
        name,
        tenantId: tenant.id,
        isDeleted: true,
      },
    });

    if (deletedCategory) {
      // Kembalikan kategori yang dihapus
      const restoredCategory = await prisma.propertyCategory.update({
        where: { id: deletedCategory.id },
        data: { isDeleted: false },
      });

      return {
        message: "Category restored successfully",
        data: restoredCategory,
      };
    }

    // Jika tidak ada kategori yang dihapus, cek kategori aktif dengan nama yang sama
    const existingCategory = await prisma.propertyCategory.findFirst({
      where: {
        name,
        tenantId: tenant.id,
        isDeleted: false,
      },
    });

    if (existingCategory) {
      throw new Error("Category already exist for this tenant");
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
