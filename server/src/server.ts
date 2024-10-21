import cookieParser from "cookie-parser";
import "dotenv/config";
import express, { Request, Response } from "express";
import { authRouter } from "./auth/routes/authRoute";
import { userRouter } from "./routes/userRoute";
import { enterpriseRouter } from "./routes/enterpriseRoute";
import { departmentRouter } from "./routes/departmentRoute";
import { workerRouter } from "./routes/workerRoute";
import { trainingRouter } from "./routes/trainingRoute";
import { PORT } from "./auth/constants/env";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log("Server running on port:" + PORT);
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(`/api/${process.env.VERSION}/auth`, authRouter);
app.use(`/api/${process.env.VERSION}/users`, userRouter);
app.use(`/api/${process.env.VERSION}/enterprises`, enterpriseRouter);
app.use(`/api/${process.env.VERSION}/departments`, departmentRouter);
app.use(`/api/${process.env.VERSION}/workers`, workerRouter);
app.use(`/api/${process.env.VERSION}/trainings`, trainingRouter);

export default app;
