import { cloudinaryRemove, cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface UpdateTenantBody {
  name?: string;
  phoneNumber?: string;
  bankName?: string;
  bankNumber?: string;
  // Add other fields that need to be updated
}

export const updateTenantProfileService = async (
  body: UpdateTenantBody,
  imageFile: Express.Multer.File | undefined,
  userId: number
) => {
  try {
    // 1. Find the active tenant associated with this user
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: userId,
        isDeleted: false,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found or already deleted");
    }

    // 2. Process image if provided
    let secureUrl: string | undefined;
    if (imageFile) {
      try {
        if (tenant.imageUrl) {
          await cloudinaryRemove(tenant.imageUrl);
        }
        const { secure_url } = await cloudinaryUpload(imageFile);
        secureUrl = secure_url;
      } catch (error) {
        throw new Error("Error processing image: " + (error as Error).message);
      }
    }

    // 3. Update tenant data
    const updatedTenant = await prisma.tenant.update({
      where: { id: tenant.id }, // Use tenant.id found from the query
      data: secureUrl
        ? {
            ...body,
            imageUrl: secureUrl,
          }
        : body,
    });

    return {
      status: 200,
      message: "Tenant profile updated successfully",
      data: updatedTenant,
    };
  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      throw new Error("Failed to update tenant profile: " + error.message);
    }
    throw new Error(
      "Failed to update tenant profile: An unknown error occurred"
    );
  }
};
