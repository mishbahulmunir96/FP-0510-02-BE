import { comparePassword } from "../../lib/argon";
import { JWT_SECRET } from "../../config";
import { sign } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { User } from "../../../prisma/generated/client";

interface Body extends Pick<User, "email" | "password"> {}

export const loginService = async (body: Body) => {
  try {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    });

    if (!user) {
      throw new Error("Invalid email address");
    }

    if (!user.isVerified) {
      throw new Error("Please verify your email first");
    }

    if (password === null) {
      throw new Error("Password is required");
    }

    const isPasswordValid = await comparePassword(password, user.password!);
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }

    const { password: pass, ...userWithoutPassword } = user;
    const token = sign(
      {
        id: user.id,
        role: user.role,
      },
      JWT_SECRET!,
      { expiresIn: "2h" }
    );
    await prisma.user.update({
      where: { id: user.id },
      data: { token },
    });

    return { ...userWithoutPassword, token };
  } catch (error) {
    throw error;
  }
};
