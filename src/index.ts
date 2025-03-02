import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import accountRouter from "./routes/account.router";
import authRouter from "./routes/auth.router";
import calendarRouter from "./routes/calendar.router";
import categoryRouter from "./routes/category.router";
import peakSeasonRateRouter from "./routes/peakSeasonRate.router";
import propertyRouter from "./routes/property.router";
import reviewRouter from "./routes/review.router";
import roomRouter from "./routes/room.router";
import roomNonAvailabilityRouter from "./routes/roomNonAvailability.router";
import sampleRouter from "./routes/sample.router";
import statisticRouter from "./routes/statistic.router";
import transactionRouter from "./routes/transaction.router";
import xenditRouter from "./routes/xendit.router";
import { initializeCheckInReminder } from "./script/checkInReminder";

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
app.use("/properties", propertyRouter);
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
