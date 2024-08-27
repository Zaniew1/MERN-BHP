import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { authRouter } from "./routes/authRoute";
import { userRouter } from "./routes/userRoute";
import { enterpriseRouter } from "./routes/enterpriseRoute";
import { departmentRouter } from "./routes/departmentRoute";
import { workerRouter } from "./routes/workerRoute";
import { trainingRouter } from "./routes/trainingRoute";
const prisma = new PrismaClient();
const port = process.env.PORT;
const app = express();

async function main() {
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Hello");
});
app.listen(port, () => {
  console.log("Server running on port:" + port);
});

app.use(express.json());
app.use(cookieParser());
app.use(`/api/${process.env.VERSION}/auth`, authRouter);
app.use(`/api/${process.env.VERSION}/user`, userRouter);
app.use(`/api/${process.env.VERSION}/enterprise`, enterpriseRouter);
app.use(`/api/${process.env.VERSION}/department`, departmentRouter);
app.use(`/api/${process.env.VERSION}/worker`, workerRouter);
app.use(`/api/${process.env.VERSION}/training`, trainingRouter);

export default app;
