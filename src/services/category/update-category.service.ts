// src/services/category/update-category.service.ts
import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const updateCategoryService = async (
  id: number,
  body: Pick<PropertyCategory, "name">
) => {
  try {
    const { name } = body;

    // Cari kategori yang akan diupdate, pastikan tidak dihapus
    const propertyCategory = await prisma.propertyCategory.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        tenant: true,
      },
    });

    if (!propertyCategory) {
      throw new Error("Category not found");
    }

    // Jika nama berbeda dari nama saat ini
    if (name !== propertyCategory.name) {
      // Cek untuk kategori aktif yang memiliki nama yang sama
      const existingActiveCategory = await prisma.propertyCategory.findFirst({
        where: {
          name,
          tenantId: propertyCategory.tenantId,
          isDeleted: false,
          id: { not: id },
        },
      });

      if (existingActiveCategory) {
        throw new Error("Category name already exists for this tenant");
      }

      // Cek juga untuk kategori yang dihapus dengan nama yang sama
      const existingDeletedCategory = await prisma.propertyCategory.findFirst({
        where: {
          name,
          tenantId: propertyCategory.tenantId,
          isDeleted: true,
        },
      });

      if (existingDeletedCategory) {
        // Opsi 1: Kembalikan error
        // throw new Error("A deleted category with this name exists. Please choose a different name or restore the deleted category.");

        // Opsi 2: Hapus kategori yang dihapus sebelumnya untuk mengizinkan nama ini
        await prisma.propertyCategory.delete({
          where: { id: existingDeletedCategory.id },
        });
      }
    }

    // Update kategori
    const updatedCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { name },
    });

    return {
      message: "Update property category success",
      data: updatedCategory,
    };
  } catch (error) {
    // Tangani kasus error spesifik
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint failed")) {
        throw new Error("Category name already exists for this tenant");
      }
      throw error;
    }
    throw error;
  }
};
