import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetPropertyQuery extends PaginationQueryParams {
  location?: string;
  startDate?: string;
  endDate?: string;
  category?: string; // Filter berdasarkan nama kategori (melalui relasi PropertyCategory)
  search?: string;
  guest?: number;
}

export const getPropertiesService = async (query: GetPropertyQuery) => {
  const {
    take = 1, // Nilai default untuk jumlah item per halaman
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
    ...(location && { location: { contains: location, mode: "insensitive" } }),
    ...(category && {
      // Filter berdasarkan relasi PropertyCategory
      PropertyCategory: {
        some: {
          name: { contains: category, mode: "insensitive" },
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
    ...(startDate &&
      endDate && {
        // Filter properti berdasarkan tanggal pembuatan dan ketersediaan room
        createdAt: {
          lte: new Date(endDate),
        },
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
            // Pastikan tidak ada jadwal non-availability room di periode yang dipilih
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

  // Membatasi field yang diizinkan untuk sorting
  const allowedSortByFields: Array<
    keyof Prisma.PropertyOrderByWithRelationInput
  > = [
    "createdAt",
    "updatedAt",
    "title",
    "location",
    // Perhatikan: karena kategori merupakan relasi, kita tidak mengizinkannya sebagai field sort langsung
  ];
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
