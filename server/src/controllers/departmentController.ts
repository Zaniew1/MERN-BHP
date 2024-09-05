import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const createDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created department",
  });
});
export const deleteDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully deleted department",
  });
});
export const editDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited department",
  });
});
export const getDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully  get department",
  });
});
export const getAllDepartments: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: "success get all departments",
      data: {
        departments: "123",
      },
    });
  } catch (e) {
    console.log(e);
  }
});
