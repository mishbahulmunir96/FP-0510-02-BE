import { hashPassword } from "../../lib/argon";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";

interface VerifyInput {
  token: string;
  password: string;
}

export const verifyChangeEmailService = async ({
  token,
  password,
}: VerifyInput) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
      createdAt: string;
    };

    const tokenCreationTime = new Date(decoded.createdAt).getTime();
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000;

    if (currentTime - tokenCreationTime > oneHour) {
      throw new Error("Verification link has expired");
    }

    const user = await prisma.user.findFirst({
      where: { token },
    });

    if (!user) throw new Error("Invalid verification token");

    if (password?.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    const hashedPassword = password ? await hashPassword(password) : undefined;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        email: decoded.email,
        password: hashedPassword,
        token: null,
      },
    });

    return {
      message: "Email verified successfully",
      email: decoded.email,
    };
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid verification token");
    }
    throw error;
  }
};
