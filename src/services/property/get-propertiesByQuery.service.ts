import { PaginationQueryParams } from "../../types/pagination";
import prisma from "../../lib/prisma";
import { Prisma } from "../../../prisma/generated/client";

interface GetPropertiesQuery extends PaginationQueryParams {
  search?: string;
  startDate?: Date;
  endDate?: Date;
  guest?: number;
  title?: string;
  name?: string; // untuk filter kategori properti berdasarkan nama
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

    // Membangun whereClause untuk properti
    const whereClause: Prisma.PropertyWhereInput = {
      isDeleted: false,
      // Filter properti berdasarkan kategori (PropertyCategory) jika 'name' disediakan
      PropertyCategory: name
        ? { some: { name: { equals: name, mode: "insensitive" } } }
        : undefined,
      // Filter ketersediaan ruangan (room) untuk properti ini
      room: {
        some: {
          stock: { gt: 0 },
          ...(guest ? { guest: { gte: guest } } : {}),
          roomNonAvailability:
            startDate && endDate
              ? {
                  none: {
                    OR: [
                      {
                        startDate: startDate,
                        endDate: endDate,
                      },
                    ],
                  },
                }
              : undefined,
        },
      },
    };

    // Tambahkan filter pencarian pada title jika disediakan
    if (title) {
      whereClause.title = { contains: title, mode: "insensitive" };
    }

    // Jika parameter 'search' disediakan, tambahkan pencarian pada title dan description
    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    // Jika filter harga disediakan, misalnya, properti harus memiliki setidaknya satu room dengan harga <= price
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
                    OR: [
                      {
                        startDate: startDate,
                        endDate: endDate,
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
      skip: (page - 1) * take,
      take: take,
      orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : {},
      include: {
        propertyImage: { select: { imageUrl: true } },
        review: { select: { rating: true } },
        tenant: { select: { name: true } },
        room: true,
        PropertyCategory: true,
        propertyFacility: true,
      },
    });

    const count = await prisma.property.count({ where: whereClause });

    return {
      data: propertiesByQuery,
      meta: { page, take, total: count },
      whereClause, // Opsi: untuk debugging; bisa dihapus di produksi.
    };
  } catch (error) {
    throw error;
  }
};
