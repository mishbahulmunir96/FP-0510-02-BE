
import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";
import { Prisma } from "../../../prisma/generated/client";

interface UpdateRoomBody {
  type?: "Deluxe" | "Standard" | "Suite";
  name?: string;
  stock?: number;
  price?: number;
  guest?: number;
  facilityTitle?: string;
  facilityDescription?: string;
  // propertyId tidak diizinkan untuk diupdate, jadi tidak dimasukkan di sini
}

export const updateRoomService = async (
  id: number,
  body: Partial<UpdateRoomBody>,
  file?: Express.Multer.File
) => {
  try {
    // Cari room berdasarkan id beserta relasi roomImage dan roomFacility
    const existingRoom = await prisma.room.findUnique({
      where: { id },
      include: { 
        roomImage: true,
        roomFacility: true
      },
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

    // Pisahkan data facility dari body
    const { facilityTitle, facilityDescription, ...roomData } = body;

    // Persiapkan data update untuk room
    const updatedData: Prisma.RoomUpdateInput = {
      ...roomData,
      // Update facility jika ada perubahan
      ...(facilityTitle || facilityDescription
        ? {
            roomFacility: {
              upsert: {
                where: {
                  id: existingRoom.roomFacility[0]?.id ?? -1
                },
                create: {
                  title: facilityTitle ?? "",
                  description: facilityDescription ?? ""
                },
                update: {
                  ...(facilityTitle && { title: facilityTitle }),
                  ...(facilityDescription && { description: facilityDescription })
                }
              }
            }
          }
        : {})
    };

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update data room
      const updatedRoom = await tx.room.update({
        where: { id },
        data: updatedData,
        include: {
          roomFacility: true,
          roomImage: true
        }
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