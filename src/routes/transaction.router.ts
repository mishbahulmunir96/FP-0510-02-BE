// import { Router } from "express";
// import {
//   createRoomReservationController,
//   uploadPaymentProofController,
// } from "../controllers/transaction.controller";
// import { verifyToken } from "../lib/verifyDummy";
// import { uploader } from "../lib/multer";
// import { fileFilter } from "../lib/fileFilter";

// const router = Router();

// router.post("/", verifyToken, createRoomReservationController);
// router.patch(
//   "/:id",
//   verifyToken,
//   fileFilter,
//   uploader().single("paymentProof"),
//   uploadPaymentProofController
// );

// export default router;
