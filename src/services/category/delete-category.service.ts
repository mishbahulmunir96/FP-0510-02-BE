import prisma from "../../lib/prisma";

export const deleteCategoryService = async (id: number) => {
  try {
    const category = await prisma.propertyCategory.findFirst({
      where: { 
        id,
        isDeleted: false // Only find non-deleted categories
      },
    });

    if (!category) {
      throw new Error("Category not found or already deleted");
    }

    // Perform soft delete by updating isDeleted flag
    const updatedCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { 
        isDeleted: true,
        updatedAt: new Date() // Update the timestamp
      },
    });

    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

// Optional: Add a service to restore soft-deleted categories
export const restoreCategoryService = async (id: number) => {
  try {
    const category = await prisma.propertyCategory.findFirst({
      where: { 
        id,
        isDeleted: true // Only find deleted categories
      },
    });

    if (!category) {
      throw new Error("Deleted category not found");
    }

    // Restore the category by setting isDeleted to false
    const restoredCategory = await prisma.propertyCategory.update({
      where: { id },
      data: { 
        isDeleted: false,
        updatedAt: new Date()
      },
    });

    return restoredCategory;
  } catch (error) {
    throw error;
  }
}