import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

interface getCategoriesService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
  search?: string;
}

export const getAllCategoriesService = async (query: getCategoriesService) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.PropertyCategoryWhereInput = {
      isDeleted: false,
    };

    if (search) {
      whereClause.name = { contains: search };
    }

    const categories = await prisma.propertyCategory.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
    });

    if (!categories) {
      throw new Error("Categories not found");
    }

    const count = await prisma.propertyCategory.count({
      where: whereClause,
    });

    return {
      data: categories,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
