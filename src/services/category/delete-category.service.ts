import prisma from "../../lib/prisma";

export const deleteCategoryService = async (id: number) => {
  try {
    const category = await prisma.propertyCategory.findFirst({
      where: { id, isDeleted: false },
      include: {
        properties: {
          where: { isDeleted: false },
        },
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }
    if (category.properties.length > 0) {
      throw new Error("Cannot delete category with associated properties");
    }
    const deletedCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { isDeleted: true },
    });

    return {
      message: "Category deleted successfully",
      data: deletedCategory,
    };
  } catch (error) {
    throw error;
  }
};
