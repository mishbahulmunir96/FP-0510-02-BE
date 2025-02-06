import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPropertiesQuery extends PaginationQueryParams {
  search: string;
}

export const getTenantPropertiesService = async (
  query: GetPropertiesQuery,
  userId: number
) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    // Validasi user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User don't have access");
    }

    // Cari tenant yang terkait dengan user
    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    // Membangun whereClause untuk properti
    const whereClause: Prisma.PropertyWhereInput = {
      isDeleted: false,
      tenantId: tenant.id,
    };

    // Tambahkan filter pencarian jika search tersedia
    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const properties = await prisma.property.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder || "asc" },
      include: {
        propertyImage: { select: { imageUrl: true } },
        review: { select: { rating: true } },
        tenant: { select: { name: true } },
        room: { select: { price: true } },
      },
    });

    const count = await prisma.property.count({ where: whereClause });
    return { data: properties, meta: { page, take, total: count } };
  } catch (error) {
    throw error;
  }
};
