import cookieParser from "cookie-parser";
import "dotenv/config";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { authRouter } from "./routes/authRoute";
import { userRouter } from "./routes/userRoute";
import { enterpriseRouter } from "./routes/enterpriseRoute";
import { departmentRouter } from "./routes/departmentRoute";
import { workerRouter } from "./routes/workerRoute";
import { trainingRouter } from "./routes/trainingRoute";
import morgan from "morgan";
// const prisma = new PrismaClient();
const port = process.env.PORT;
const app = express();

// async function main() {
//   main()
//     .then(async () => {
//       await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//       console.error(e);
//       await prisma.$disconnect();
//       process.exit(1);
//     });
// }
app.use(morgan("dev"));
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello, this is your backend!");
});
app.listen(port, () => {
  console.log("Server running on port:" + port);
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
