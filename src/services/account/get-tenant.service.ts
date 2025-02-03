import prisma from "../../lib/prisma";

export const getTenantService = async (userId: number) => {
  const tenant = await prisma.tenant.findFirst({
    where: { userId },
  });
  if (!tenant) {
    throw new Error("Tenant not found");
  }
  return tenant;
};
