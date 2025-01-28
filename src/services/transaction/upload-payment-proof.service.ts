import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";


interface UploadPaymentProofBody {
  userId: number;
  paymentId: number;
  paymentProof: Express.Multer.File;
}

export const uploadPaymentProofService = async ({
  userId,
  paymentId,
  paymentProof,
}: UploadPaymentProofBody) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: { user: true },
    });

    if (!paymentId) {
      throw new Error("Transaction not found.");
    }

    if (payment?.status === "CANCELLED") {
      throw new Error("Transaction has been cancelled. Cannot upload proof.");
    }

    if (payment?.userId !== userId) {
      throw new Error(
        "You are not allowed to upload proof for this transaction."
      );
    }

    const { secure_url } = await cloudinaryUpload(paymentProof);

    const updatedTransaction = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        paymentProof: secure_url,
        status: "WAITING_FOR_PAYMENT_CONFIRMATION",
      },
    });

    return updatedTransaction;
  } catch (error) {
    throw error;
  }
};

