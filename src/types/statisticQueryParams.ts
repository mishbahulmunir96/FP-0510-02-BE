export interface StatisticQueryParams {
  filterType?: "date-range" | "month-year" | "year-only";
  startDate?: string;
  endDate?: string;
  month?: string;
  year?: string;
  propertyId?: string;
  limit?: string;
}
