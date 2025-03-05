import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPeakSeasonsQuery extends PaginationQueryParams {
  search: string;
  price: number;
  startDate: Date;
  endDate: Date;
  roomId: number;
}

export const getPeakSeasonsService = async (
  query: GetPeakSeasonsQuery,
  userId: number
) => {
  try {
    const { take, page, sortBy, sortOrder } = query;

    const user = await prisma.user.findUnique({
      where: { id: userId },
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

    const whereClause: Prisma.PeakSeasonRateWhereInput = {
      isDeleted: false,
      room: { property: { tenantId: tenant.id } },
    };

    const properties = await prisma.peakSeasonRate.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder || "asc" },
      include: {
        room: true,
      },
    });

    const count = await prisma.peakSeasonRate.count({ where: whereClause });
    return {
      data: properties,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
