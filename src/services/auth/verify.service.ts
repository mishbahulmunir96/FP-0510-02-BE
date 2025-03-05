import prisma from "../../lib/prisma";
import { hashPassword } from "../../lib/argon";
import jwt from "jsonwebtoken";

interface VerifyInput {
  token: string;
  password: string;
  name: string;
}

export const verifyService = async ({ token, password, name }: VerifyInput) => {
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
      where: {
        token,
        email: decoded.email,
      },
    });

    if (!user) {
      throw new Error("Invalid verification token");
    }

    if (user.isVerified) {
      throw new Error("Email already verified");
    }

    if (!password || password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    if (!name || name.trim().length === 0) {
      throw new Error("Name is required");
    }

    const hashedPassword = await hashPassword(password);
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        isVerified: true,
        token: null,
        name: name.trim(),
      },
    });

    return {
      message: "Email verified successfully. Please login to continue.",
      email: updatedUser.email,
      name: updatedUser.name,
    };
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid verification token");
    }
    if (error.name === "TokenExpiredError") {
      throw new Error("Verification link has expired");
    }
    throw new Error(error.message);
  }
};

export const resendVerificationEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.isVerified) {
    throw new Error("Email already verified");
  }

  const newVerificationToken = jwt.sign(
    {
      email,
      createdAt: new Date().toISOString(),
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );

  await prisma.user.update({
    where: { id: user.id },
    data: { token: newVerificationToken },
  });

  return { message: "Verification email resent successfully" };
};
