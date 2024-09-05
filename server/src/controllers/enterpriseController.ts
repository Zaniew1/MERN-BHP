import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const createEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created enterprises",
  });
});
export const deleteEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully deleted enterprises",
  });
});
export const editEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited enterprises",
  });
});
export const getEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully get enterprises",
  });
});
export const getAllEnterprises: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: "success get all enterprises",
      data: {
        enterprises: "123",
      },
    });
  } catch (e) {
    console.log(e);
  }
});
