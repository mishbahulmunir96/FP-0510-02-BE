import { cloudinaryRemove, cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface UpdateTenantBody {
  name?: string;
  phoneNumber?: string;
  bankName?: string;
  bankNumber?: string;
  // Tambahkan field lain yang perlu di-update
}
export const updateTenantProfileService = async (
  body: UpdateTenantBody,
  imageFile: Express.Multer.File | undefined,
  tenantId: number
) => {
  try {
    const tenant = await prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant || tenant.isDeleted) {
      throw new Error("Tenant not found or already deleted");
    }

    if (!tenant) {
      throw new Error("Tenant not found or already deleted");
    }

    // 2. Proses gambar jika ada
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

    // 3. Update data tenant
    const updatedTenant = await prisma.tenant.update({
      where: { id: tenantId },
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
    throw new Error(
      "Failed to update tenant profile: " + (error as Error).message
    );
  }
};
