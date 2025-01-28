import prisma from "../../lib/prisma";
import { hashPassword } from "../../lib/argon";
import jwt from "jsonwebtoken";

interface VerifyInput {
  token: string;
  password: string;
}

export const verifyService = async ({ token, password }: VerifyInput) => {
  try {
    // Verify token dan cek expiry
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
      createdAt: string;
    };

    // Cek apakah token sudah expired (1 jam)
    const tokenCreationTime = new Date(decoded.createdAt).getTime();
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 jam dalam milliseconds

    if (currentTime - tokenCreationTime > oneHour) {
      throw new Error("Verification link has expired");
    }

    // Cari user berdasarkan token
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

    // Validasi password
    if (!password || password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    const hashedPassword = await hashPassword(password);

    // Update user data
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        isVerified: true,
        token: null, // Reset token setelah verifikasi
      },
    });

    return {
      message: "Email verified successfully. Please login to continue.",
      email: user.email,
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

  // Buat token verifikasi baru
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

  // Update token user
  await prisma.user.update({
    where: { id: user.id },
    data: { token: newVerificationToken },
  });

  // Kirim email verifikasi baru
  // ... (implementasi pengiriman email sama seperti di registerService)

  return { message: "Verification email resent successfully" };
};
