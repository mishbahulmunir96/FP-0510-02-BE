import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import cors from "cors";
import sampleRouter from "./routes/sample.router";
import transactionRouter from "./routes/transaction.router";
import propertyRouter from "./routes/property.router";
import authRouter from "./routes/auth.router";
import accountRouter from "./routes/account.router";
import { initializeAutoCheckInOut } from "./services/transaction/autoCheckInOut.Service";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/samples", sampleRouter);
app.use("/transactions", transactionRouter);
app.use("/properties", propertyRouter);
app.use("/auth", authRouter);
app.use("/account", accountRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

initializeAutoCheckInOut();

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
