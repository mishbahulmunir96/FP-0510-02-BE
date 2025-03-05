import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";

// Interface for a single facility
interface RoomFacility {
  title: string;
  description: string;
}

interface CreateRoomBody {
  type: "Deluxe" | "Standard" | "Suite"; // Sesuai dengan enum Type di schema Room
  stock: number;
  name?: string;
  price: number;
  guest: number;
  propertyId: number;
  facilities: RoomFacility[]; // Array of facilities instead of single facility
}

export const createRoomService = async (
  body: CreateRoomBody,
  file: Express.Multer.File,
  tenantId: number
) => {
  try {
    const { type, name, stock, price, guest, propertyId, facilities } = body;

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

    // Validasi array facilities
    if (!facilities || !Array.isArray(facilities) || facilities.length === 0) {
      throw new Error("At least one facility must be provided");
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
          type,
          name,
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

      // Buat fasilitas room untuk setiap fasilitas dalam array
      const facilityPromises = facilities.map((facility) =>
        tx.roomFacility.create({
          data: {
            title: facility.title,
            description: facility.description,
            roomId: newRoom.id,
          },
        })
      );

      // Jalankan semua promise pembuatan fasilitas
      await Promise.all(facilityPromises);

      // Ambil data room yang lengkap dengan semua relasinya
      const roomWithRelations = await tx.room.findUnique({
        where: { id: newRoom.id },
        include: {
          roomFacility: true,
          roomImage: true,
        },
      });

      return {
        message: "Create Room success",
        data: roomWithRelations,
      };
    });
  } catch (error) {
    throw error;
  }
};
