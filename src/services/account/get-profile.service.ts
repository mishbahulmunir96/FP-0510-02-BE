import prisma from "../../lib/prisma";

interface ServiceResponse<T = any> {
  status: "success" | "error";
  message?: string;
  data: T;
}

export const getProfileService = async (
  id: number
): Promise<ServiceResponse> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        imageUrl: true,
        isVerified: true,
        role: true,
        provider: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      status: "success",
      data: user,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get profile: ${error.message}`);
    }
    throw new Error("Internal server error");
  }
};
