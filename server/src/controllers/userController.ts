import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { DatabaseInstance } from "../utils/database";
import { z } from "zod";
const User = z.object({
  name: z.string().min(4).max(100),
  email: z.string().email({ message: "Invalid email address" }).min(4).max(100).optional(),
});
export type User = z.infer<typeof User>;

export const createUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const user = await DatabaseInstance.create("user", { data: { name, email, password } });
  res.status(201).json({
    status: "success: Successfully created user",
    data: {
      user,
    },
  });
});
export const deleteUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  const user = await DatabaseInstance.delete("user", id);

  res.status(200).json({
    status: "success: successfully deleted user",
    data: {
      user,
    },
  });
});

export const editUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id, name } = req.body;
  const user = await DatabaseInstance.update("user", { where: { id }, data: { name } });
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
    const user = await DatabaseInstance.findById("user", id);
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
  const users = await DatabaseInstance.findMany("user");
  res.status(200).json({
    status: "success: successfully get user",
    data: {
      users,
    },
  });
});
