import { Request, Response, NextFunction } from "express";
import { getMonthlyAvailabilityAndPricingService } from "../services/calendar/get-monthly-availability-and-pricing.service";
import { compareRoomPricingService } from "../services/calendar/compare-room-pricing-service";
import { getPropertyMonthlyPriceComparisonService } from "../services/calendar/get-property-monthly-price-comparison.service";

export const getMonthlyCalendarController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId } = req.params;
    let { date } = req.query;
    let parsedDate: Date;
    if (!date) {
      parsedDate = new Date();
    } else {
      parsedDate = new Date(date as string);
      if (isNaN(parsedDate.getTime())) {
        res.status(400).json({
          success: false,
          message: "Invalid date format. Please use YYYY-MM-DD format.",
        });
      }
    }
    parsedDate.setDate(1);
    parsedDate.setHours(0, 0, 0, 0);

    const calendarData = await getMonthlyAvailabilityAndPricingService(
      parseInt(roomId),
      parsedDate
    );

    res.status(200).json({
      success: true,
      data: calendarData,
    });
  } catch (error) {
    next(error);
  }
};

export const compareRoomPricingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomIds, startDate, endDate } = req.body;
    if (!roomIds || !Array.isArray(roomIds) || roomIds.length === 0) {
      res.status(400).json({
        success: false,
        message: "Please provide a valid array of room IDs",
      });
    }

    if (!startDate || !endDate) {
      res.status(400).json({
        success: false,
        message: "Both startDate and endDate are required",
      });
    }
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);
    if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
      res.status(400).json({
        success: false,
        message: "Invalid date format. Please use YYYY-MM-DD format.",
      });
    }

    if (parsedStartDate > parsedEndDate) {
      res.status(400).json({
        success: false,
        message: "startDate must be before or equal to endDate",
      });
    }

    const comparisonData = await compareRoomPricingService(
      roomIds.map((id: string) => parseInt(id)),
      parsedStartDate,
      parsedEndDate
    );

    res.status(200).json({
      success: true,
      data: comparisonData,
    });
  } catch (error) {
    next(error);
  }
};

export const getPropertyMonthlyPriceComparisonController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { propertyId } = req.params;
    let { date } = req.query;
    let parsedDate: Date;
    if (!date) {
      parsedDate = new Date();
    } else {
      parsedDate = new Date(date as string);
      if (isNaN(parsedDate.getTime())) {
        res.status(400).json({
          success: false,
          message: "Invalid date format. Please use YYYY-MM-DD format.",
        });
      }
    }

    const result = await getPropertyMonthlyPriceComparisonService(
      parseInt(propertyId),
      parsedDate
    );

    res.status(200).json({
      success: true,
      propertyId: parseInt(propertyId),
      month: `${parsedDate.getFullYear()}-${String(
        parsedDate.getMonth() + 1
      ).padStart(2, "0")}`,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};
