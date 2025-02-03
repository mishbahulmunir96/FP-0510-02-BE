import { comparePassword, hashPassword } from "../../lib/argon";
import prisma from "../../lib/prisma";

interface ChangePasswordBody {
  password: string;
  newPassword: string;
}

export const changePasswordService = async (
  userId: number,
  { password, newPassword }: ChangePasswordBody
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new Error("User not found");
  }

  // Pastikan password di DB tidak null
  if (!user.password) {
    throw new Error("User has no password set");
  }

  const match = await comparePassword(password, user.password);
  if (!match) {
    throw new Error("Current password is incorrect");
  }

  const hashed = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed },
  });

  return { message: "Change password success" };
};
