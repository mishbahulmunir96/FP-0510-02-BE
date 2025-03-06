import { sign } from "jsonwebtoken";
import { User } from "../../../prisma/generated/client";
import { BASE_URL_FE, JWT_SECRET_FORGOT_PASSWORD } from "../../config";
import { sendForgotPasswordEmail } from "../../lib/handlebars";
import prisma from "../../lib/prisma";

export const forgotPasswordService = async (body: Pick<User, "email">) => {
  try {
    const { email } = body;
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new Error("Invalid email address");
    }

    const token = sign({ id: user.id }, JWT_SECRET_FORGOT_PASSWORD!, {
      expiresIn: "1h",
    });

    const link = `${BASE_URL_FE}/reset-password/${token}`;

    await sendForgotPasswordEmail({ email, link });

    return { message: "Email sent success" };
  } catch (error) {
    throw error;
  }
};
