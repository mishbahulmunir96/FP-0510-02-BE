import { prisma } from "../../lib/prisma";

export const getSamplesService = async () => {
  try {
    const sample = await prisma.sample.findMany();
    return sample;
  } catch (error) {
    throw error;
  }
};
