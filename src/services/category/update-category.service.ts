import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const updateCategoryService = async (
  id: number,
  body: Pick<PropertyCategory, "name">
) => {
  try {
    const { name } = body;

    // Ambil data kategori yang akan diupdate beserta data tenantnya
    const propertyCategory = await prisma.propertyCategory.findUnique({
      where: { id },
      include: {
        tenant: true
      }
    });

    if (!propertyCategory) {
      throw new Error("Category not found");
    }

    // Cek jika nama berbeda dengan yang sebelumnya
    if (name !== propertyCategory.name) {
      // Cek nama yang sama dalam lingkup tenant yang sama
      const existingPropertyCategory = await prisma.propertyCategory.findFirst({
        where: { 
          name,
          tenantId: propertyCategory.tenantId, // Tambahkan pengecekan tenantId
          id: { not: id } 
        },
      });

      if (existingPropertyCategory) {
        throw new Error("Category name already exists for this tenant");
      }
    }

    // Update kategori
    const updatePropertyCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { name },
    });

    return {
      message: "Update property category success",
      data: updatePropertyCategory,
    };
  } catch (error) {
    // Handle specific error cases
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint failed')) {
        throw new Error("Category name already exists for this tenant");
      }
      throw error;
    }
    throw error;
  }
};