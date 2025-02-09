// controllers/reportController.ts
import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
import { getPropertyReportService } from "../services/statistic/get-property-report.service";
import { getTransactionReportService } from "../services/statistic/get-transaction-report.service";
import { getUserReportService } from "../services/statistic/get-user-report.service";

export const getPropertyReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Dapatkan tenant dari user yang login
    const user = res.locals.user;

    // Dapatkan tenant data
    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id },
    });

    if (!tenant) {
      res.status(404).json({
        status: "error",
        message: "Tenant not found",
      });
      return;
    }

    const { startDate, endDate, propertyId } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({
        status: "error",
        message: "Start date and end date are required",
      });
      return;
    }

    const report = await getPropertyReportService({
      tenantId: tenant.id,
      startDate: new Date(startDate as string),
      endDate: new Date(endDate as string),
      propertyId: propertyId ? Number(propertyId) : undefined,
    });

    res.status(200).json({
      status: "success",
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactionReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id },
    });

    if (!tenant) {
      res.status(404).json({
        status: "error",
        message: "Tenant not found",
      });
      return;
    }

    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({
        status: "error",
        message: "Start date and end date are required",
      });
      return;
    }

    const report = await getTransactionReportService({
      tenantId: tenant.id,
      startDate: new Date(startDate as string),
      endDate: new Date(endDate as string),
    });

    res.status(200).json({
      status: "success",
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// controllers/reportController.ts
export const getUserReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id },
    });

    if (!tenant) {
      res.status(404).json({
        status: "error",
        message: "Tenant not found",
      });
      return;
    }

    const { startDate, endDate, limit } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({
        status: "error",
        message: "Start date and end date are required",
      });
      return;
    }

    const report = await getUserReportService({
      tenantId: tenant.id,
      startDate: new Date(startDate as string),
      endDate: new Date(endDate as string),
      limit: limit ? Number(limit) : undefined,
    });

    res.status(200).json({
      status: "success",
      data: report,
    });
  } catch (error) {
    next(error);
  }
};
