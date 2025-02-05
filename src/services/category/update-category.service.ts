import { PropertyCategory } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const updateCategoryService = async (
  id: number,
  body: Pick<PropertyCategory, "name">
) => {
  try {
    const { name } = body;
    const propertyCategory = await prisma.propertyCategory.findUnique({
      where: { id },
    });
    if (!propertyCategory) {
      throw new Error("Category not found");
    }

    if (name !== propertyCategory.name) {
      const existingPropertyCategory = await prisma.propertyCategory.findFirst({
        where: { name, id: { not: id } },
      });
      if (existingPropertyCategory) {
        throw new Error("Name already exist");
      }
    }
    const updatePropertyCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { name },
    });
    return {
      message: "Update property category success",
      data: updatePropertyCategory,
    };
  } catch (error) {
    throw error;
  }
};
