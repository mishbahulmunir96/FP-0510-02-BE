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

    const roomConditions: Prisma.RoomWhereInput = {
      stock: { gt: 0 },
      ...(guest ? { guest: { gte: guest } } : {}),
      ...(price ? { price: { lte: price } } : {}),
    };

    if (startDate && endDate) {
      roomConditions.roomNonAvailability = {
        none: {
          AND: [
            {
              startDate: { lte: endDate },
              endDate: { gte: startDate },
            },
          ],
        },
      };
    }

    const whereClause: Prisma.PropertyWhereInput = {
      isDeleted: false,
      status: "PUBLISHED",
      room: {
        some: roomConditions,
      },
    };

    if (name) {
      whereClause.propertyCategory = {
        name: { equals: name, mode: "insensitive" },
      };
    }

    if (title) {
      whereClause.title = { contains: title, mode: "insensitive" };
    }
    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } }, // Added location search
      ];
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
          where: { isDeleted: false },
        },
        review: {
          select: { rating: true },
        },
        tenant: {
          select: { name: true, imageUrl: true },
        },
        room: {
          where: { isDeleted: false },
          include: {
            roomImage: {
              select: { imageUrl: true },
              where: { isDeleted: false },
            },
            roomFacility: {
              where: { isDeleted: false },
            },
          },
        },
        propertyCategory: true,
        propertyFacility: {
          where: { isDeleted: false },
        },
      },
    });
    const count = await prisma.property.count({ where: whereClause });
    return {
      data: propertiesByQuery,
      meta: {
        page,
        take,
        total: count,
        totalPages: Math.ceil(count / take),
      },
      ...(process.env.NODE_ENV !== "production" ? { whereClause } : {}),
    };
  } catch (error) {
    throw error;
  }
};
