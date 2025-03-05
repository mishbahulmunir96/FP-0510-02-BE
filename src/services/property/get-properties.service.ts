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
  priceMin?: number;
  priceMax?: number;
}

export const getPropertiesService = async (query: GetPropertyQuery) => {
  const {
    take = 8,
    page = 1,
    sortBy = "createdAt",
    sortOrder = "desc",
    location,
    category,
    search,
    startDate,
    endDate,
    guest,
    priceMin,
    priceMax,
  } = query;
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
    ...(location && {
      location: {
        contains: location,
        mode: "insensitive",
      },
    }),
    ...(category && {
      propertyCategory: {
        name: {
          contains: category,
          mode: "insensitive",
        },
      },
    }),

    ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    }),
    ...(guest && {
      room: {
        some: {
          guest: { gte: guest },
          isDeleted: false,
        },
      },
    }),

    ...(priceMin && {
      room: {
        some: {
          price: { gte: priceMin },
          isDeleted: false,
        },
      },
    }),
    ...(priceMax && {
      room: {
        some: {
          price: { lte: priceMax },
          isDeleted: false,
        },
      },
    }),
    ...(startDate &&
      endDate && {
        room: {
          some: {
            isDeleted: false,
            ...(guest && { guest: { gte: guest } }),
            reservation: {
              none: {
                AND: [
                  {
                    payment: {
                      status: {
                        in: [
                          "WAITING_FOR_PAYMENT_CONFIRMATION",
                          "PROCESSED",
                          "CHECKED_IN",
                        ],
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
            roomNonAvailability: {
              none: {
                isDeleted: false,
                startDate: { lte: new Date(endDate) },
                endDate: { gte: new Date(startDate) },
              },
            },
          },
        },
      }),
  };
  const allowedSortByFields: Array<
    keyof Prisma.PropertyOrderByWithRelationInput
  > = ["createdAt", "updatedAt", "title", "location"];

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
        propertyCategory: true,
        propertyImage: {
          where: { isDeleted: false },
        },
        propertyFacility: {
          where: { isDeleted: false },
        },
        tenant: true,
        room: {
          where: { isDeleted: false },
          include: {
            roomImage: {
              where: { isDeleted: false },
            },
            roomFacility: {
              where: { isDeleted: false },
            },
            peakSeasonRate: {
              where: { isDeleted: false },
            },
            reservation: {
              include: {
                payment: true,
              },
            },
            roomNonAvailability: {
              where: { isDeleted: false },
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
