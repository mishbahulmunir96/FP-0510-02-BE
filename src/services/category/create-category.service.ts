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
      where: { 
        name,
        tenantId: tenant.id
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

export const getCategoryListService = async (userId: number) => {
  try {
    if (!userId) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const categories = await prisma.propertyCategory.findMany({
      where: { tenantId: tenant.id },
      include: {
        properties: true,
      },
    });

    return {
      message: "Get category list success",
      data: categories,
    };
  } catch (error) {
    throw error;
  }
};

export const getAllCategoryListService = async () => {
  try {
    const categories = await prisma.propertyCategory.findMany({
      include: {
        properties: true,
        tenant: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return {
      message: "Get all category list success",
      data: categories,
    };
  } catch (error) {
    throw error;
  }
};

export const updateCategoryService = async (
  categoryId: number,
  body: Partial<PropertyCategory>
) => {
  try {
    const category = await prisma.propertyCategory.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    // Check if name is being updated and if it already exists for this tenant
    if (body.name) {
      const existingCategory = await prisma.propertyCategory.findFirst({
        where: {
          name: body.name,
          tenantId: category.tenantId,
          id: { not: categoryId }, // Exclude current category
        },
      });

      if (existingCategory) {
        throw new Error("Category name already exists for this tenant");
      }
    }

    const updatedCategory = await prisma.propertyCategory.update({
      where: { id: categoryId },
      data: body,
    });

    return {
      message: "Update category success",
      data: updatedCategory,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteCategoryService = async (categoryId: number) => {
  try {
    const category = await prisma.propertyCategory.findUnique({
      where: { id: categoryId },
      include: {
        properties: true,
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    // Check if category has associated properties
    if (category.properties.length > 0) {
      throw new Error("Cannot delete category with associated properties");
    }

    await prisma.propertyCategory.delete({
      where: { id: categoryId },
    });

    return {
      message: "Delete category success",
    };
  } catch (error) {
    throw error;
  }
};

export const getCategoryByIdService = async (categoryId: number) => {
  try {
    const category = await prisma.propertyCategory.findUnique({
      where: { id: categoryId },
      include: {
        properties: true,
        tenant: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return {
      message: "Get category detail success",
      data: category,
    };
  } catch (error) {
    throw error;
  }
};