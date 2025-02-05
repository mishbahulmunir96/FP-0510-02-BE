import { NextFunction, Request, Response } from "express";
import { createRoomReservationService } from "../services/transaction/create-room-reservation.service";
import { getTransactionByUserService } from "../services/transaction/get-transaction-by-user.service";
import { uploadPaymentProofService } from "../services/transaction/upload-payment-proof.service";
import { getTransactionsByUserService } from "../services/transaction/get-transactions-by-user.service";
import { cancelTransactionByUserService } from "../services/transaction/cancel-transaction-by-user.service";
import { getTransactionsByTenantService } from "../services/transaction/get-transactions-by-tenant.service";
import { getTransactionByTenantService } from "../services/transaction/get-transaction-by-tenant.tservice";
import { approveTransactionByTenantService } from "../services/transaction/approve-transaction-by-tenant.service";
import { cancelTransactionByTenantService } from "../services/transaction/cancel-transaction-by-tenant.service";
import { testCreateXenditService } from "../services/transaction/test-create-xendit.service";

export const createRoomReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const reservationData = {
      userId,
      roomId: req.body.roomId,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
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
      res.status(400).send("Payment proof is required.");
      return;
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
    const tenantId = res.locals.id;
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
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
    const tenantId = res.locals.user.id;
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
    const tenantId = res.locals.user.id;
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
    const tenantId = res.locals.user.id;
    const paymentId = parseInt(req.params.id);

    const result = await cancelTransactionByTenantService(paymentId, tenantId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const testCreateXenditController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await testCreateXenditService();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
