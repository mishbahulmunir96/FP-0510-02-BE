import { sign } from "jsonwebtoken";
import { JWT_SECRET_DUMMY } from "../config";
import prisma from "../lib/prisma";
import { User } from "../../prisma/generated/client";

interface Body extends Pick<User, "email" | "password"> {}

export const generateTokenService = async (body: Body) => {
  try {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email address");
    }

    const DUMMY_PASSWORD = "Admin#123";
    if (password !== DUMMY_PASSWORD) {
      throw new Error("Incorrect password");
    }

    const { password: pass, ...userWithoutPassword } = user;

    const token = sign({ id: user.id }, JWT_SECRET_DUMMY!, { expiresIn: "2h" });

    return { ...userWithoutPassword, token };
  } catch (error) {
    throw error;
  }
};
