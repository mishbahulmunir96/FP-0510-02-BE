import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";

interface UpdateRoomBody {
  type?: "Deluxe" | "Standard" | "Suite";
  stock?: number;
  price?: number;
  guest?: number;
  // propertyId tidak diizinkan untuk diupdate, jadi tidak dimasukkan di sini
}

export const updateRoomService = async (
  id: number,
  body: Partial<UpdateRoomBody>,
  file?: Express.Multer.File
) => {
  try {
    // Cari room berdasarkan id beserta relasi roomImage
    const existingRoom = await prisma.room.findUnique({
      where: { id },
      include: { roomImage: true },
    });
    if (!existingRoom) {
      throw new Error("Room not found");
    }

    let secureUrl: string | undefined;
    if (file) {
      const uploadResult = await cloudinaryUpload(file);
      secureUrl = uploadResult.secure_url;
    }

    // Pastikan field numeric dikonversi ke number (jika body dikirim sebagai string)
    if (body.stock !== undefined) {
      body.stock = Number(body.stock);
    }
    if (body.price !== undefined) {
      body.price = Number(body.price);
    }
    if (body.guest !== undefined) {
      body.guest = Number(body.guest);
    }

    // Pastikan propertyId tidak diupdate jika ada di body
    if ("propertyId" in body) {
      delete body["propertyId"];
    }

    const updatedData = { ...body };

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update data room
      const updatedRoom = await tx.room.update({
        where: { id },
        data: updatedData,
      });

      // Jika file diunggah, update atau buat record roomImage
      if (file && secureUrl) {
        if (existingRoom.roomImage.length > 0) {
          // Update gambar room pertama yang ada
          await tx.roomImage.update({
            where: { id: existingRoom.roomImage[0].id },
            data: { imageUrl: secureUrl },
          });
        } else {
          // Buat record roomImage baru
          await tx.roomImage.create({
            data: {
              imageUrl: secureUrl,
              roomId: id,
            },
          });
        }
      }

      return {
        message: "Update room success",
        data: updatedRoom,
      };
    });
  } catch (error) {
    throw error;
  }
};
