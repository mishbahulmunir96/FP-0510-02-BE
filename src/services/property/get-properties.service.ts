import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPropertyQuery extends PaginationQueryParams {
  location?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
  search?: string;
  guest?: number;
}

export const getPropertiesService = async (query: GetPropertyQuery) => {
  const {
    take = 1, // Default value
    page = 1,
    sortBy = "createdAt",
    sortOrder = "asc",
    location,
    category,
    search,
    startDate,
    endDate,
    guest,
  } = query;

  // Date validation
  if ((startDate && !endDate) || (!startDate && endDate)) {
    throw new Error("Both startDate and endDate are required for filtering");
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error("Invalid date format for startDate or endDate");
    }
    if (start > end) {
      throw new Error("startDate cannot be after endDate");
    }
  }

  const whereClause: Prisma.PropertyWhereInput = {
    isDeleted: false,
    status: "PUBLISHED",
    ...(location && { location: { contains: location, mode: "insensitive" } }),
    ...(category && { category: { contains: category, mode: "insensitive" } }),
    ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    }),
    ...(guest && {
      room: {
        some: {
          guest: {
            gte: guest,
          },
          isDeleted: false,
        },
      },
    }),
    ...(startDate &&
      endDate && {
        createdAt: {
          lte: new Date(endDate),
        },
        room: {
          some: {
            isDeleted: false,
            guest: guest
              ? {
                  gte: guest,
                }
              : undefined,
            // Check for existing reservations
            reservation: {
              none: {
                AND: [
                  {
                    payemnt: {
                      status: {
                        in: ["WAITING_FOR_PAYMENT_CONFIRMATION", "PROCESSED"],
                      },
                    },
                  },
                  {
                    startDate: { lte: new Date(endDate) },
                    endDate: { gte: new Date(startDate) },
                  },
                ],
              },
            },
            // Check room non-availability dates
            roomNonAvailability: {
              none: {
                isDeleted: false,
                date: {
                  gte: new Date(startDate),
                  lte: new Date(endDate),
                },
              },
            },
          },
        },
      }),
  };

  const allowedSortByFields: Array<
    keyof Prisma.PropertyOrderByWithRelationInput
  > = ["createdAt", "updatedAt", "title", "location", "category"];
  const sortField = allowedSortByFields.includes(
    sortBy as keyof Prisma.PropertyOrderByWithRelationInput
  )
    ? sortBy
    : "createdAt";
  const orderByClause: Prisma.PropertyOrderByWithRelationInput = {
    [sortField]: sortOrder,
  };
  const skip = (page - 1) * take;

  const [properties, totalCount] = await Promise.all([
    prisma.property.findMany({
      where: whereClause,
      skip,
      take,
      orderBy: orderByClause,
      include: {
        propertyImage: true,
        propertyFacility: true,
        tenant: true,
        room: {
          include: {
            roomImage: true,
            roomFacility: true,
            peakSeasonRate: true,
            reservation: {
              include: {
                payemnt: true,
              },
            },
            roomNonAvailability: {
              where: {
                isDeleted: false,
              },
            },
          },
        },
      },
    }),
    prisma.property.count({ where: whereClause }),
  ]);

  return {
    data: properties,
    meta: {
      totalCount,
      page,
      take,
    },
  };
};
