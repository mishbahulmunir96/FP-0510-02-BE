import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetRoomsQuery extends PaginationQueryParams {
  search: string;
}

export const getRoomsService = async (query: GetRoomsQuery) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;
    const whereClause: Prisma.RoomWhereInput = {
      isDeleted: false,
    };

    if (search) {
      const allowedTypes: Array<"Deluxe" | "Standard" | "Suite"> = [
        "Deluxe",
        "Standard",
        "Suite",
      ];
      if (allowedTypes.includes(search as any)) {
        whereClause.type = {
          equals: search as "Deluxe" | "Standard" | "Suite",
        };
      }
    }

    const rooms = await prisma.room.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder || "asc" },
      include: {
        roomFacility: true,
        roomImage: true,
        roomNonAvailability: true,
        peakSeasonRate: true,
        reservation: true,
        property: true,
      },
    });

    const count = await prisma.room.count({ where: whereClause });
    return { data: rooms, meta: { page, take, total: count } };
  } catch (error) {
    throw error;
  }
};
