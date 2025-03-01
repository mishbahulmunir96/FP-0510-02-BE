import { NextFunction, Request, Response } from "express";
import { approveTransactionByTenantService } from "../services/transaction/approve-transaction-by-tenant.service";
import { cancelTransactionByTenantService } from "../services/transaction/cancel-transaction-by-tenant.service";
import { cancelTransactionByUserService } from "../services/transaction/cancel-transaction-by-user.service";
import { createRoomReservationService } from "../services/transaction/create-room-reservation.service";
import { getTransactionByTenantService } from "../services/transaction/get-transaction-by-tenant.tservice";
import { getTransactionByUserService } from "../services/transaction/get-transaction-by-user.service";
import { getTransactionsByTenantService } from "../services/transaction/get-transactions-by-tenant.service";
import { getTransactionsByUserService } from "../services/transaction/get-transactions-by-user.service";
import { uploadPaymentProofService } from "../services/transaction/upload-payment-proof.service";
import prisma from "../lib/prisma";
import { confirmCheckOutService } from "../services/transaction/confirm-check-out.service";
import { confirmCheckInService } from "../services/transaction/confirm-check-in.service";

export const createRoomReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;

    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new Error("Invalid date format");
    }

    const reservationData = {
      userId,
      roomId: req.body.roomId,
      startDate,
      endDate,
      paymentMethode: req.body.paymentMethode,
    };

    const result = await createRoomReservationService(reservationData);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const uploadPaymentProofController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const proofFile = req.file as Express.Multer.File;
    const paymentId = Number(req.params.id);
    const userId = res.locals.user.id;

    if (!proofFile) {
      throw new Error("Proof file is required");
    }

    const updatedTransaction = await uploadPaymentProofService({
      userId,
      paymentId,
      paymentProof: proofFile,
    });

    res.status(200).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

export const getTransactionByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const userId = res.locals.user.id;
    const result = await getTransactionByUserService(id, userId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getTransactionsByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      startDate: req.query.startDate as string,
      endDate: req.query.endDate as string,
    };

    const result = await getTransactionsByUserService(userId, query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const cancelTransactionByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const paymentId = Number(req.params.id);
    const userId = res.locals.user.id;
    const result = await cancelTransactionByUserService(paymentId, userId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getTransactionsByTenantController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const tenantId = tenant?.id;

    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      startDate: req.query.startDate as string,
      endDate: req.query.endDate as string,
    };

    const result = await getTransactionsByTenantService(tenantId, query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getTransactionByTenantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const tenantId = tenant?.id;
    const transactionId = parseInt(req.params.id);

    const transaction = await getTransactionByTenantService(
      transactionId,
      tenantId
    );
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

export const approveTransactionByTenantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const tenantId = tenant?.id;
    const paymentId = parseInt(req.params.id);
    const isApproved = req.body.isApproved === true;

    const result = await approveTransactionByTenantService(
      paymentId,
      tenantId,
      isApproved
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const cancelTransactionByTenantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const tenantId = tenant?.id;
    const paymentId = parseInt(req.params.id);

    const result = await cancelTransactionByTenantService(paymentId, tenantId);
    console.log("Cancel transaction called with ID:", req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const confirmCheckInController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const paymentId = parseInt(req.params.id);
    const result = await confirmCheckInService(paymentId, tenant.id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const confirmCheckOutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
      select: {
        id: true,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const paymentId = parseInt(req.params.id);
    const result = await confirmCheckOutService(paymentId, tenant.id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
