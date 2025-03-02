import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPropertyQuery extends PaginationQueryParams {
  location?: string;
  startDate?: string;
  endDate?: string;
  category?: string; // Filter berdasarkan nama kategori
  search?: string;
  guest?: number;
  priceMin?: number;
  priceMax?: number;
}

export const getPropertiesService = async (query: GetPropertyQuery) => {
  const {
    take = 8, // Nilai default untuk jumlah item per halaman
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

  // Validasi tanggal: jika salah satu tanggal diberikan, kedua tanggal harus ada dan valid
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

  // Membangun whereClause untuk filter properti
  const whereClause: Prisma.PropertyWhereInput = {
    isDeleted: false,
    status: "PUBLISHED",

    // Filter lokasi (insensitif terhadap kapitalisasi)
    ...(location && {
      location: {
        contains: location,
        mode: "insensitive",
      },
    }),

    // Filter berdasarkan kategori (perbaikan)
    ...(category && {
      propertyCategory: {
        name: {
          contains: category,
          mode: "insensitive",
        },
      },
    }),

    // Filter berdasarkan kata kunci pencarian (judul atau deskripsi)
    ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    }),

    // Filter berdasarkan jumlah tamu (hanya kamar yang dapat menampung jumlah tamu yang diinginkan)
    ...(guest && {
      room: {
        some: {
          guest: { gte: guest },
          isDeleted: false,
        },
      },
    }),

    // Filter berdasarkan rentang harga
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

    // Filter berdasarkan ketersediaan dalam rentang tanggal yang ditentukan
    ...(startDate &&
      endDate && {
        room: {
          some: {
            isDeleted: false,
            ...(guest && { guest: { gte: guest } }),
            // Pastikan tidak ada reservasi yang tumpang tindih dengan periode yang dipilih
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
            // Pastikan tidak ada jadwal non-availability room yang tumpang tindih
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

  // Membatasi field yang diizinkan untuk sorting
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
