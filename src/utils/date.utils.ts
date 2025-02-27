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
