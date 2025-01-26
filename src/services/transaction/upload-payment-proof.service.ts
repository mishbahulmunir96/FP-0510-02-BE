// import prisma from "../../lib/prisma";
// import { cloudinaryUpload } from "../../lib/cloudinary";

// interface UploadPaymentProofBody {
//   transactionId: number; // ID transaksi awal yang diupload
//   paymentProof: Express.Multer.File; // File bukti pembayaran
// }

// export const uploadPaymentProofService = async ({
//   transactionId,
//   paymentProof,
// }: UploadPaymentProofBody) => {
//   try {
//     // Temukan transaksi yang sesuai dengan ID transaksi yang diberikan
//     const initialTransaction = await prisma.transaction.findUnique({
//       where: { id: transactionId },
//     });

//     if (!initialTransaction) {
//       throw new Error("Transaction not found.");
//     }

//     // Verifikasi status transaksi
//     if (initialTransaction.status === "CANCELLED") {
//       throw new Error("Transaction has been cancelled. Cannot upload proof.");
//     }

//     // Upload bukti pembayaran ke cloud
//     const { secure_url } = await cloudinaryUpload(paymentProof);

//     // Mencari semua transaksi terkait dengan roomId dan kesinambungan tanggal
//     const relatedTransactions = await prisma.transaction.findMany({
//       where: {
//         roomId: initialTransaction.roomId,
//         // Memeriksa kesinambungan tanggal
//         OR: [
//           {
//             startDate: {
//               gte: initialTransaction.startDate,
//               lt: initialTransaction.endDate,
//             },
//           },
//           {
//             endDate: {
//               gte: initialTransaction.startDate,
//               lte: initialTransaction.endDate,
//             },
//           },
//         ],
//       },
//       orderBy: {
//         createdAt: "asc", // Pastikan urutan berdasarkan waktu penciptaan
//       },
//     });

//     // Filter transaksi berdasarkan waktu createdAt yang sama
//     const groupedTransactions = relatedTransactions.filter((transaction) => {
//       return (
//         transaction.createdAt.getTime() ===
//         initialTransaction.createdAt.getTime()
//       );
//     });

//     // Jika ada transaksi dalam grup yang ditemukan
//     if (groupedTransactions.length > 0) {
//       await prisma.transaction.updateMany({
//         where: {
//           id: { in: groupedTransactions.map((t) => t.id) }, // Pahami ID transaksi yang teridentifikasi
//         },
//         data: {
//           paymentProof: secure_url, // Memperbarui bukti pembayaran
//           status: "WAITING_FOR_PAYMENT_CONFIRMATION", // Pembaruan status untuk semua transaksi dalam grup
//         },
//       });

//       return {
//         message:
//           "Payment proof uploaded successfully for all related transactions.",
//       };
//     } else {
//       throw new Error("No related transactions found with matching createdAt.");
//     }
//   } catch (error) {
//     throw error; // Menangkap dan melempar kesalahan
//   }
// };
