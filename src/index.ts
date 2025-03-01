import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import cors from "cors";
import sampleRouter from "./routes/sample.router";
import transactionRouter from "./routes/transaction.router";
import propertyRouter from "./routes/property.router";
import authRouter from "./routes/auth.router";
import accountRouter from "./routes/account.router";
import xenditRouter from "./routes/xendit.router";
import reviewRouter from "./routes/review.router";
import categoryRouter from "./routes/category.router";
import roomRouter from "./routes/room.router";
import roomNonAvailabilityRouter from "./routes/roomNonAvailability.router";
import peakSeasonRateRouter from "./routes/peakSeasonRate.router";
import statisticRouter from "./routes/statistic.router";
import { initializeCheckInReminder } from "./script/checkInReminder";
import calendarRouter from "./routes/calendar.router";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [/http:\/\/localhost/, "https://ratehaven.my.id"],
  })
);
app.use(express.json());

app.use("/samples", sampleRouter);
app.use("/transactions", transactionRouter);
app.use("/property", propertyRouter);
app.use("/auth", authRouter);
app.use("/account", accountRouter);
app.use("/xendit", xenditRouter);
app.use("/reviews", reviewRouter);
app.use("/categories", categoryRouter);
app.use("/rooms", roomRouter);
app.use("/peak-season-rates", peakSeasonRateRouter);
app.use("/room-non-availabilities", roomNonAvailabilityRouter);
app.use("/statistics", statisticRouter);
app.use("/calendar", calendarRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

initializeCheckInReminder();

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
