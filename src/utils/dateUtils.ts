import { format } from "date-fns";
import { StatisticQueryParams } from "../types/statisticQueryParams";

export const normalizeToUTC = (date: Date): Date => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
  );
};

export const getDefaultDateRange = (): { startDate: Date; endDate: Date } => {
  const endDate = normalizeToUTC(new Date());
  const startDate = new Date(endDate);
  startDate.setFullYear(startDate.getFullYear() - 1);
  return { startDate, endDate };
};

export const validateDateRange = (startDate: Date, endDate: Date): void => {
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format");
  }

  if (endDate < startDate) {
    throw new Error("End date must be greater than start date");
  }

  const maxRange = 366;
  const daysDiff = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysDiff > maxRange) {
    throw new Error(`Date range cannot exceed ${maxRange} days`);
  }
};

export const getDateRangeFromFilter = (
  filterType: "date-range" | "month-year" | "year-only",
  params: {
    startDate?: string;
    endDate?: string;
    month?: number;
    year?: number;
  }
): { startDate: Date; endDate: Date } => {
  const { startDate, endDate, month, year } = params;

  switch (filterType) {
    case "month-year": {
      if (!month || !year)
        throw new Error("Month and year are required for month-year filter");
      const start = new Date(Date.UTC(year, month - 1, 1));
      const end = new Date(Date.UTC(year, month, 0));
      return { startDate: start, endDate: end };
    }
    case "year-only": {
      if (!year) throw new Error("Year is required for year-only filter");
      const start = new Date(Date.UTC(year, 0, 1));
      const end = new Date(Date.UTC(year, 11, 31));
      return { startDate: start, endDate: end };
    }
    case "date-range": {
      if (!startDate || !endDate) {
        return getDefaultDateRange();
      }
      return {
        startDate: normalizeToUTC(new Date(startDate)),
        endDate: normalizeToUTC(new Date(endDate)),
      };
    }
    default:
      return getDefaultDateRange();
  }
};

export const processDateFilters = (query: StatisticQueryParams) => {
  const filterType = query.filterType || "date-range";
  const month = query.month ? parseInt(query.month) : undefined;
  const year = query.year ? parseInt(query.year) : undefined;

  const { startDate, endDate } = getDateRangeFromFilter(filterType, {
    startDate: query.startDate,
    endDate: query.endDate,
    month,
    year,
  });

  validateDateRange(startDate, endDate);

  return { startDate, endDate };
};

export const groupDataByPeriod = (
  payments: any[],
  startDate: Date,
  endDate: Date
): { date: string; totalBookings: number; totalRevenue: number }[] => {
  const diffInDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  let groupingFunction: (date: Date) => string;

  if (diffInDays <= 7) {
    groupingFunction = (date) => format(normalizeToUTC(date), "yyyy-MM-dd");
  } else if (diffInDays <= 31) {
    groupingFunction = (date) => {
      const weekNumber = Math.ceil(date.getDate() / 7);
      return `${format(normalizeToUTC(date), "yyyy-MM")}-W${weekNumber}`;
    };
  } else {
    groupingFunction = (date) => format(normalizeToUTC(date), "yyyy-MM");
  }

  const groupedData = payments.reduce(
    (
      acc: {
        [key: string]: {
          date: string;
          totalBookings: number;
          totalRevenue: number;
        };
      },
      payment
    ) => {
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

  return Object.values(groupedData).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
};
