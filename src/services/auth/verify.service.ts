import prisma from "../../lib/prisma";
import { hashPassword } from "../../lib/argon";

interface VerifyInput {
  token: string;
  password: string;
}

export const verifyService = async ({ token, password }: VerifyInput) => {
  const user = await prisma.user.findFirst({
    where: { token },
  });

  if (!user) {
    throw new Error("Invalid verification token");
  }

  if (user.isVerified) {
    throw new Error("Email already verified");
  }

  const hashedPassword = await hashPassword(password);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      isVerified: true,
      token: null,
    },
  });

  return { message: "Email verified successfully" };
};
