import { SalesReport } from "../../types/report";
import { getPropertyMetricsService } from "./get-property-metrics.service";
import { getTransactionMetricsService } from "./get-transaction.metrics.service";

interface GetSalesReportParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  propertyId?: number;
}

export const getSalesReportService = async ({
  tenantId,
  startDate,
  endDate,
  propertyId,
}: GetSalesReportParams): Promise<SalesReport> => {
  try {
    const propertyMetrics = await getPropertyMetricsService({
      tenantId,
      startDate,
      endDate,
      propertyId,
    });

    const propertyIds = propertyMetrics.map((p) => p.propertyId);

    const transactionMetrics = await getTransactionMetricsService({
      propertyIds,
      startDate,
      endDate,
    });

    return {
      propertyMetrics,
      transactionMetrics,
    };
  } catch (error) {
    throw error;
  }
};
