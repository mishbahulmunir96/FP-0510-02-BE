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

    // Build the room conditions separately to handle both guest and price filters
    const roomConditions: Prisma.RoomWhereInput = {
      stock: { gt: 0 },
      ...(guest ? { guest: { gte: guest } } : {}),
      ...(price ? { price: { lte: price } } : {}),
    };

    // Add date availability condition if dates are provided
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

    // Build the main where clause
    const whereClause: Prisma.PropertyWhereInput = {
      isDeleted: false,
      status: "PUBLISHED", // Ensure only published properties are returned
      room: {
        some: roomConditions,
      },
    };

    // Add property category filter if name is provided
    if (name) {
      whereClause.propertyCategory = {
        name: { equals: name, mode: "insensitive" },
      };
    }

    // Add title filter if provided
    if (title) {
      whereClause.title = { contains: title, mode: "insensitive" };
    }

    // Add search filter if provided
    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } }, // Added location search
      ];
    }

    // Fetch properties with pagination and sorting
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

    // Get total count for pagination
    const count = await prisma.property.count({ where: whereClause });

    // Return data with pagination metadata
    return {
      data: propertiesByQuery,
      meta: {
        page,
        take,
        total: count,
        totalPages: Math.ceil(count / take),
      },
      // Only include whereClause in development environments
      ...(process.env.NODE_ENV !== "production" ? { whereClause } : {}),
    };
  } catch (error) {
    throw error;
  }
};
