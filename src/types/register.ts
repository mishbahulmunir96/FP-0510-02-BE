import { Role } from "../../prisma/generated/client";

// types/register.ts

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
  role?: "USER" | "TENANT";
  bankName?: string;
  bankNumber?: string;
  phoneNumber?: string;
};
