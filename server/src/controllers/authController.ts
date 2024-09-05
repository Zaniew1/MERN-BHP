import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const register: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully registered",
  });
});
export const login: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully logged in ",
  });
});
export const forgetPassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully forget pass",
  });
});
export const logout: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully logout",
  });
});
export const changePassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully changed pass",
  });
});
export const resetPassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully reseted password",
  });
});
