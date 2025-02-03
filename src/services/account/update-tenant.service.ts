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
  // 1. Cari tenant yang aktif (isDeleted = false)
  const tenant = await prisma.tenant.findFirst({
    where: {
      id: tenantId,
      isDeleted: false,
    },
  });
  if (!tenant) {
    throw new Error("Tenant not found or already deleted");
  }

  // 2. Jika ada file gambar, hapus gambar lama dari Cloudinary, lalu upload baru
  let secureUrl: string | undefined;
  if (imageFile) {
    if (tenant.imageUrl) {
      await cloudinaryRemove(tenant.imageUrl);
    }
    const { secure_url } = await cloudinaryUpload(imageFile);
    secureUrl = secure_url;
  }

  // 3. Update data tenant
  await prisma.tenant.update({
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
  };
};
