import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";
import { getPropertyCalendarReportService } from "../services/statistic/get-calendar-property-report.service";
import { getSalesReportService } from "../services/statistic/get-sales-report.service";
import { getDateRangeFromFilter, validateDateRange } from "../utils/date.utils";

interface StatisticQueryParams {
  filterType?: "date-range" | "month-year" | "year-only";
  startDate?: string;
  endDate?: string;
  month?: string;
  year?: string;
  propertyId?: string;
  limit?: string;
}

const processDateFilters = (query: StatisticQueryParams) => {
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

export const getSalesReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    const query = req.query as StatisticQueryParams;

    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const { startDate, endDate } = processDateFilters(query);
    const propertyId = query.propertyId ? Number(query.propertyId) : undefined;

    if (propertyId) {
      const propertyExists = await prisma.property.findFirst({
        where: {
          id: propertyId,
          tenantId: tenant.id,
          isDeleted: false,
        },
      });

      if (!propertyExists) {
        throw new Error("Property not found or unauthorized");
      }
    }

    const report = await getSalesReportService({
      tenantId: tenant.id,
      startDate,
      endDate,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      data: report,
      metadata: {
        filterType: query.filterType || "date-range",
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        propertyId,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPropertyCalendarReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    const propertyId = Number(req.query.propertyId as string);
    const startDate = req.query.startDate as string;
    const endDate = req.query.endDate as string;
    const roomId = req.query.roomId
      ? Number(req.query.roomId as string)
      : undefined;

    if (!propertyId || !startDate || !endDate) {
      throw new Error("Property ID, start date, and end date are required");
    }

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
      throw new Error("Invalid date format");
    }

    if (parsedEndDate < parsedStartDate) {
      throw new Error("End date must be greater than start date");
    }

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        isDeleted: false,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    if (roomId) {
      const roomBelongsToProperty = await prisma.room.findFirst({
        where: {
          id: roomId,
          propertyId: propertyId,
          isDeleted: false,
        },
      });

      if (!roomBelongsToProperty) {
        throw new Error("Room not found in the specified property");
      }
    }

    const report = await getPropertyCalendarReportService({
      propertyId,
      tenantId: tenant.id,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      roomId,
    });

    res.status(200).json({
      status: "success",
      data: report,
    });
  } catch (error) {
    next(error);
  }
};
