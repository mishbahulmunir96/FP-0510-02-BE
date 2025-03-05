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
    // Get property metrics
    const propertyMetrics = await getPropertyMetricsService({
      tenantId,
      startDate,
      endDate,
      propertyId,
    });

    // Extract property IDs for transaction metrics
    const propertyIds = propertyMetrics.map((p) => p.propertyId);

    // Get transaction metrics
    const transactionMetrics = await getTransactionMetricsService({
      propertyIds,
      startDate,
      endDate,
    });

    // Combine metrics into final report
    return {
      propertyMetrics,
      transactionMetrics,
    };
  } catch (error) {
    throw error;
  }
};
