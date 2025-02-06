import { StatusPayment } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

interface XenditCallback {
  id: string;
  external_id: string;
  status: "PAID" | "EXPIRED" | "PENDING";
  paid_amount: number;
  payment_method: string;
  payment_channel: string;
  payment_destination: string;
}

export const xenditCallbackService = async (body: XenditCallback) => {
  try {
    const payment = await prisma.payment.findFirst({
      where: {
        uuid: body.external_id,
        paymentMethode: "OTOMATIS",
      },
    });

    if (!payment) {
      throw new Error("Payment not found or payment method is not OTOMATIS");
    }

    let status: StatusPayment;
    switch (body.status) {
      case "PAID":
        status = StatusPayment.PROCESSED;
        break;
      case "EXPIRED":
        status = StatusPayment.CANCELLED;
        break;
      case "PENDING":
        status = StatusPayment.WAITING_FOR_PAYMENT;
        break;
      default:
        status = StatusPayment.WAITING_FOR_PAYMENT;
    }

    const updatedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status,
        paymentProof: body.payment_method
          ? `Xendit Payment - Method: ${body.payment_method}, Channel: ${body.payment_channel}`
          : null,
        updatedAt: new Date(),
      },
    });

    return {
      message: "Payment status updated successfully",
      payment: updatedPayment,
    };
  } catch (error) {
    throw error;
  }
};
