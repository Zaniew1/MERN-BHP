import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
// import * as factory from "./handlersFactory";
const prisma = new PrismaClient();

export const createUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  res.status(200).json({
    status: "success: Successfully created user",
    data: {
      user,
    },
  });
});
export const deleteUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.status(200).json({
    status: "success: successfully deleted user",
    data: {
      user,
    },
  });
});
// exports.deleteUser = factory.deleteOne(prisma.user);

export const editUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id, name } = req.body;
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  res.status(200).json({
    status: "success: successfully edited user",
    data: {
      user,
    },
  });
});
export const getUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success: successfully get user",
      data: {
        user,
      },
    });
  } catch (e) {
    console.log(e);
  }
});
export const getAllUsers: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      status: "success: success get all users",
      data: {
        users,
      },
    });
  } catch (e) {
    console.log(e);
  }
});
