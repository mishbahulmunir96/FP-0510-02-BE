import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const updateCategoryService = async (
  id: number,
  body: Pick<PropertyCategory, "name">
) => {
  try {
    const { name } = body;
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
    if (name !== propertyCategory.name) {
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
      const existingDeletedCategory = await prisma.propertyCategory.findFirst({
        where: {
          name,
          tenantId: propertyCategory.tenantId,
          isDeleted: true,
        },
      });

      if (existingDeletedCategory) {
        await prisma.propertyCategory.delete({
          where: { id: existingDeletedCategory.id },
        });
      }
    }
    const updatedCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { name },
    });

    return {
      message: "Update property category success",
      data: updatedCategory,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint failed")) {
        throw new Error("Category name already exists for this tenant");
      }
      throw error;
    }
    throw error;
  }
};
