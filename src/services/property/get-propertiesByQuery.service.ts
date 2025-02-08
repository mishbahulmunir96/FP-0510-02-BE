import { PaginationQueryParams } from "../../types/pagination";
import prisma from "../../lib/prisma";
import { Prisma } from "../../../prisma/generated/client";

interface GetPropertiesQuery extends PaginationQueryParams {
  search?: string;
  startDate?: Date;
  endDate?: Date;
  guest?: number;
  title?: string;
  name?: string;
  price?: number;
}

export const getPropertiesServiceByQuery = async (
  query: GetPropertiesQuery
) => {
  try {
    const {
      take,
      page,
      sortBy,
      sortOrder,
      search,
      guest,
      title,
      startDate,
      endDate,
      name,
      price,
    } = query;

    const whereClause: Prisma.PropertyWhereInput = {
      isDeleted: false,
      // Fixed property category filter
      propertyCategory: name
        ? { name: { equals: name, mode: "insensitive" } }
        : undefined,
      room: {
        some: {
          stock: { gt: 0 },
          ...(guest ? { guest: { gte: guest } } : {}),
          roomNonAvailability:
            startDate && endDate
              ? {
                  none: {
                    AND: [
                      {
                        startDate: { lte: endDate },
                        endDate: { gte: startDate },
                      },
                    ],
                  },
                }
              : undefined,
        },
      },
    };

    if (title) {
      whereClause.title = { contains: title, mode: "insensitive" };
    }

    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (price) {
      whereClause.room = {
        some: {
          price: { lte: price },
          stock: { gt: 0 },
          ...(guest ? { guest: { gte: guest } } : {}),
          roomNonAvailability:
            startDate && endDate
              ? {
                  none: {
                    AND: [
                      {
                        startDate: { lte: endDate },
                        endDate: { gte: startDate },
                      },
                    ],
                  },
                }
              : undefined,
        },
      };
    }

    const propertiesByQuery = await prisma.property.findMany({
      where: whereClause,
      skip: Math.max(0, (page - 1) * take),
      take: take,
      orderBy: sortBy
        ? { [sortBy]: sortOrder || "asc" }
        : { createdAt: "desc" },
      include: {
        propertyImage: {
          select: { imageUrl: true },
        },
        review: {
          select: { rating: true },
        },
        tenant: {
          select: { name: true },
        },
        room: true,
        propertyCategory: true,
        propertyFacility: true,
      },
    });

    const count = await prisma.property.count({ where: whereClause });

    return {
      data: propertiesByQuery,
      meta: {
        page,
        take,
        total: count,
      },
      whereClause:
        process.env.NODE_ENV !== "production" ? whereClause : undefined,
    };
  } catch (error) {
    throw error;
  }
};
