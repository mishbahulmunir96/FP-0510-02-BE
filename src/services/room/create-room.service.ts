import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";

interface CreateRoomBody {
  type: "Deluxe" | "Standard" | "Suite"; // Sesuai dengan enum Type di schema Room
  stock: number;
  price: number;
  guest: number;
  propertyId: number;
  facilityTitle: string; // Judul fasilitas ruangan
  facilityDescription: string; // Deskripsi fasilitas ruangan
}

export const createRoomService = async (
  body: CreateRoomBody,
  file: Express.Multer.File,
  tenantId: number
) => {
  try {
    const {
      type,
      stock,
      price,
      guest,
      propertyId,
      facilityTitle,
      facilityDescription,
    } = body;

    const propertyIdNoNaN = Number(propertyId);
    const stockRoom = Number(stock);
    const priceRoom = Number(price);
    const guestRoom = Number(guest);

    // Validasi keberadaan property
    const property = await prisma.property.findFirst({
      where: { id: propertyIdNoNaN },
    });
    if (!property) {
      throw new Error("Property id not found");
    }

    let secureUrl: string | undefined;
    if (file) {
      const uploadResult = await cloudinaryUpload(file);
      secureUrl = uploadResult.secure_url;
    }

    // Buat room dan fasilitasnya dalam sebuah transaksi
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Membuat record room
      const newRoom = await tx.room.create({
        data: {
          type, // Menggunakan field type dari body (enum)
          stock: stockRoom,
          price: priceRoom,
          guest: guestRoom,
          property: {
            connect: { id: propertyIdNoNaN },
          },
        },
      });

      // Jika file diunggah, buat record gambar untuk room
      if (file && secureUrl) {
        await tx.roomImage.create({
          data: {
            imageUrl: secureUrl,
            roomId: newRoom.id,
          },
        });
      }

      // Buat fasilitas room menggunakan facilityTitle dan facilityDescription
      await tx.roomFacility.create({
        data: {
          title: facilityTitle,
          description: facilityDescription,
          roomId: newRoom.id,
        },
      });

      return {
        message: "Create Room success",
        data: newRoom,
      };
    });
  } catch (error) {
    throw error;
  }
};
