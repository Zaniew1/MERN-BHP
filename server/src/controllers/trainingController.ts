import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const createTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created training",
  });
});
export const deleteTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully deleted training",
  });
});
export const editTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited training",
  });
});
export const getTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully get training",
  });
});
export const getAllTrainings: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        trainings: "123",
      },
    });
  } catch (e) {
    console.log(e);
  }
});
