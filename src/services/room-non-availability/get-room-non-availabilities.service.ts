import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetRoomNonAvailabilitiesQuery extends PaginationQueryParams {
  search?: string;
  reason?: string;
  startDate?: Date;
  endDate?: Date;
  roomId?: number;
}

export const getRoomNonAvailabilitiesService = async (
  query: GetRoomNonAvailabilitiesQuery,
  userId: number
) => {
  try {
    const {
      take = 10,
      page = 1,
      sortBy = "createdAt",
      sortOrder = "asc",
      search,
      reason,
      startDate,
      endDate,
      roomId,
    } = query;

    // Validasi user dan tenant
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

    // Membangun whereClause untuk RoomNonAvailability
    const whereClause: Prisma.RoomNonAvailabilityWhereInput = {
      isDeleted: false,
      room: { property: { tenantId: tenant.id } },
      ...(roomId ? { roomId } : {}),
      ...(reason ? { reason: { contains: reason, mode: "insensitive" } } : {}),
      ...(search
        ? {
            OR: [{ reason: { contains: search, mode: "insensitive" } }],
          }
        : {}),
      ...(startDate ? { startDate: { gte: new Date(startDate) } } : {}),
      ...(endDate ? { endDate: { lte: new Date(endDate) } } : {}),
    };

    const roomNonAvailabilities = await prisma.roomNonAvailability.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { room: true },
    });

    const count = await prisma.roomNonAvailability.count({
      where: whereClause,
    });

    return { data: roomNonAvailabilities, meta: { page, take, total: count } };
  } catch (error) {
    throw error;
  }
};
