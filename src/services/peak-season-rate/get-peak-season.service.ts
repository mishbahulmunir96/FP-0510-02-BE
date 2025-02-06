import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPeakSeasonsQuery extends PaginationQueryParams {
  search?: string;
  price?: number;
  startDate?: Date;
  endDate?: Date;
  roomId?: number;
}

export const getPeakSeasonsService = async (
  query: GetPeakSeasonsQuery,
  userId: number
) => {
  try {
    const {
      take = 10,
      page = 1,
      sortBy = "createdAt",
      sortOrder = "desc",
      search,
      price,
      startDate,
      endDate,
      roomId,
    } = query;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId,
        isDeleted: false,
        user: {
          role: "TENANT",
        },
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found or unauthorized");
    }

    const whereClause: Prisma.PeakSeasonRateWhereInput = {
      isDeleted: false,
      room: {
        property: {
          tenantId: tenant.id,
        },
      },
      ...(roomId && { roomId }),
      ...(price && { price }),
      ...(startDate && { startDate: { gte: new Date(startDate) } }),
      ...(endDate && { endDate: { lte: new Date(endDate) } }),
    };

    const [peakSeasons, total] = await prisma.$transaction([
      prisma.peakSeasonRate.findMany({
        where: whereClause,
        skip: (page - 1) * take,
        take,
        orderBy: { [sortBy]: sortOrder },
        include: {
          room: true,
        },
      }),
      prisma.peakSeasonRate.count({ where: whereClause }),
    ]);

    return {
      data: peakSeasons,
      meta: {
        page,
        take,
        total,
        totalPages: Math.ceil(total / take),
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Database error: " + error.message);
    }
    throw error;
  }
};
