import prisma from "../../lib/prisma";
import { TransactionReport } from "../../types/report";
import { format } from "date-fns";

interface GetTransactionReportParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  propertyId?: number;
}

interface PeriodData {
  date: string;
  totalBookings: number;
  totalRevenue: number;
}

const groupDataByPeriod = (
  payments: any[],
  startDate: Date,
  endDate: Date
): PeriodData[] => {
  const diffInDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Tentukan format pengelompokan berdasarkan rentang waktu
  let groupingFunction: (date: Date) => string;

  if (diffInDays <= 7) {
    // Per hari untuk rentang 7 hari atau kurang
    groupingFunction = (date) => format(date, "yyyy-MM-dd");
  } else if (diffInDays <= 31) {
    // Per minggu untuk rentang 31 hari atau kurang
    groupingFunction = (date) => {
      const weekNumber = Math.ceil(date.getDate() / 7);
      return `${format(date, "yyyy-MM")}-W${weekNumber}`;
    };
  } else {
    // Per bulan untuk rentang lebih dari 31 hari
    groupingFunction = (date) => format(date, "yyyy-MM");
  }

  // Kelompokkan data
  const groupedData = payments.reduce(
    (acc: { [key: string]: PeriodData }, payment) => {
      const date = new Date(payment.createdAt);
      const key = groupingFunction(date);

      if (!acc[key]) {
        acc[key] = {
          date: key,
          totalBookings: 0,
          totalRevenue: 0,
        };
      }

      acc[key].totalBookings += 1;
      acc[key].totalRevenue += payment.totalPrice;

      return acc;
    },
    {}
  );

  // Konversi ke array dan urutkan berdasarkan tanggal
  return Object.values(groupedData).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
};

export const getTransactionReportService = async ({
  tenantId,
  startDate,
  endDate,
  propertyId,
}: GetTransactionReportParams): Promise<TransactionReport> => {
  try {
    // Validasi property jika ada
    if (propertyId) {
      const propertyExists = await prisma.property.findFirst({
        where: {
          id: propertyId,
          tenantId,
          isDeleted: false,
        },
      });

      if (!propertyExists) {
        throw new Error("Property not found or unauthorized");
      }
    }

    // Ambil semua pembayaran dalam rentang waktu
    const payments = await prisma.payment.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
        reservation: {
          some: {
            room: {
              property: {
                tenantId,
                ...(propertyId && { id: propertyId }),
                isDeleted: false,
              },
            },
          },
        },
      },
      include: {
        reservation: {
          include: {
            room: true,
          },
        },
      },
    });

    // Hitung metrik dasar
    const totalTransactions = payments.length;
    const totalRevenue = payments.reduce(
      (sum, payment) => sum + payment.totalPrice,
      0
    );
    const averageTransactionValue =
      totalTransactions > 0
        ? Number((totalRevenue / totalTransactions).toFixed(2))
        : 0;

    // Hitung distribusi metode pembayaran
    const paymentMethods = payments.reduce(
      (acc, payment) => {
        acc[payment.paymentMethode].count += 1;
        return acc;
      },
      {
        MANUAL: { count: 0, percentage: 0 },
        OTOMATIS: { count: 0, percentage: 0 },
      }
    );

    paymentMethods.MANUAL.percentage = Number(
      ((paymentMethods.MANUAL.count / totalTransactions) * 100).toFixed(2)
    );
    paymentMethods.OTOMATIS.percentage = Number(
      ((paymentMethods.OTOMATIS.count / totalTransactions) * 100).toFixed(2)
    );

    // Hitung status pembayaran
    const successfulPayments = payments.filter((p) =>
      ["CHECKED_IN", "CHECKED_OUT"].includes(p.status)
    ).length;
    const cancelledPayments = payments.filter(
      (p) => p.status === "CANCELLED"
    ).length;
    const pendingPayments = payments.filter((p) =>
      [
        "WAITING_FOR_PAYMENT",
        "WAITING_FOR_PAYMENT_CONFIRMATION",
        "PROCESSED",
      ].includes(p.status)
    ).length;

    const paymentStatusBreakdown = {
      successRate: Number(
        ((successfulPayments / totalTransactions) * 100).toFixed(2)
      ),
      cancellationRate: Number(
        ((cancelledPayments / totalTransactions) * 100).toFixed(2)
      ),
      pendingRate: Number(
        ((pendingPayments / totalTransactions) * 100).toFixed(2)
      ),
      totalSuccessful: successfulPayments,
      totalCancelled: cancelledPayments,
      totalPending: pendingPayments,
    };

    // Kelompokkan data berdasarkan periode
    const periodData = groupDataByPeriod(payments, startDate, endDate);

    // Hitung rata-rata durasi booking
    const allReservations = payments.flatMap((p) => p.reservation);
    const durations = allReservations.map((reservation) => {
      const start = new Date(reservation.startDate);
      const end = new Date(reservation.endDate);
      return Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
    });

    const averageBookingDuration =
      durations.length > 0
        ? Number(
            (
              durations.reduce((sum, duration) => sum + duration, 0) /
              durations.length
            ).toFixed(2)
          )
        : 0;

    // Hitung rata-rata lead time
    const leadTimes = allReservations.map((reservation) => {
      const bookingDate = new Date(reservation.createdAt);
      const checkInDate = new Date(reservation.startDate);
      return Math.ceil(
        (checkInDate.getTime() - bookingDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    });

    const averageBookingLeadTime =
      leadTimes.length > 0
        ? Number(
            (
              leadTimes.reduce((sum, time) => sum + time, 0) / leadTimes.length
            ).toFixed(2)
          )
        : 0;

    return {
      totalTransactions,
      totalRevenue,
      averageTransactionValue,
      paymentMethodDistribution: paymentMethods,
      paymentStatusBreakdown,
      peakBookingPeriods: periodData.map((period) => ({
        date: period.date,
        totalBookings: period.totalBookings,
        totalRevenue: period.totalRevenue,
      })),
      averageBookingDuration,
      averageBookingLeadTime,
    };
  } catch (error) {
    throw error;
  }
};
