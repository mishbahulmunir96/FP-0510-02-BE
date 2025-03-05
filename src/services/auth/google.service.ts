import { JWT_SECRET } from "../../config";
import { getUserInfo } from "../../lib/getUserInfo";
import { transporter } from "../../lib/nodemailer";

import { sign } from "jsonwebtoken";
import prisma from "../../lib/prisma";

export const loginWithGoogleService = async (accessToken: string) => {
  try {
    const userInfo = await getUserInfo(accessToken);
    if (!userInfo) {
      return {
        status: 400,
        message: "Failed to get user info from google",
      };
    }

    const user = await prisma.user.findFirst({
      where: {
        email: userInfo.email,
        isDeleted: false, 
      },
    });

    if (user && user.provider !== "GOOGLE") {
      throw new Error("Email sudah terdaftar menggunakan metode login lain");
    }

    let newUser;
    if (!user) {
      newUser = await prisma.user.create({
        data: {
          email: userInfo.email,
          name: userInfo.name,
          isVerified: true,
          provider: "GOOGLE",
          role: "USER", 
          imageUrl: userInfo.picture, 
          isDeleted: false,
        },
      });

      await transporter.sendMail({
        from: '"Admin RateHaven" <admin@ratehaven.com>',
        to: userInfo.email,
        subject: "Selamat Datang di RateHaven",
        html: `
          <h1>Welcome to RateHaven!</h1>
          <p>Hello ${userInfo.name},</p>
          <p>Thank you for registering with RateHaven.</p>
        `,
      });
    }

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET tidak dikonfigurasi");
    }

    const userId = newUser?.id || user?.id;
    if (!userId) {
      throw new Error("User ID not found");
    }

    const token = sign({ id: userId }, JWT_SECRET, {
      expiresIn: "2h",
    });

    await prisma.user.update({
      where: { id: userId },
      data: { token },
    });

    return {
      message: `Halo ${userInfo.name}`,
      data: newUser || user,
      token,
    };
  } catch (error) {
    console.error("Login with Google error:", error);
    throw error;
  }
};
