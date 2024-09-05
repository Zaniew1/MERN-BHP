import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const createUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created user",
  });
});
export const deleteUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully deleted user",
  });
});
export const editUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited user",
  });
});
export const getUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully get user",
  });
});
export const getAllUsers: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: "success get all users",
      data: {
        users: "123",
      },
    });
  } catch (e) {
    console.log(e);
  }
});
