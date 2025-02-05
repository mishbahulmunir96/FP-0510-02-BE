import prisma from "../../lib/prisma";

export const deleteCategoryService = async (id: number) => {
  try {
    const category = await prisma.propertyCategory.findFirst({
      where: { id },
    });

    if (!category) {
      throw new Error("Category id not found");
    }

    await prisma.propertyCategory.delete({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
