import { cloudinaryRemove, cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface UpdateProfileBody {
  name: string;
}

interface UpdateProfileResponse {
  status: "success" | "error";
  message: string;
  data?: {
    id: number;
    name: string;
    email: string;
    imageUrl: string | null;
    isVerified: boolean;
    role: string;
    provider: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export const updateProfileService = async (
  body: UpdateProfileBody,
  imageFile: Express.Multer.File | undefined,
  userId: number
): Promise<UpdateProfileResponse> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        isDeleted: false,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    let secureUrl: string | undefined;
    if (imageFile) {
      try {
        // Remove old image if exists
        if (user.imageUrl) {
          await cloudinaryRemove(user.imageUrl);
        }

        const uploadResult = await cloudinaryUpload(imageFile);
        secureUrl = uploadResult.secure_url;
      } catch (error) {
        throw new Error("Failed to process image upload");
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...body,
        ...(secureUrl && { imageUrl: secureUrl }),
        updatedAt: new Date(),
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

    return {
      status: "success",
      message: "Profile updated successfully",
      data: updatedUser,
    };
  } catch (error) {
    if (imageFile && error instanceof Error) {
      try {
        await cloudinaryRemove(imageFile.path);
      } catch {}
    }

    if (error instanceof Error) {
      throw new Error(`Failed to update profile: ${error.message}`);
    }
    throw new Error("Internal server error");
  }
};
