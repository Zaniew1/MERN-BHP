import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

export const createWorker: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created worker",
  });
});
export const deleteWorker: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully deleted worker",
  });
});
export const editWorker: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited worker",
  });
});
export const getWorker: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully get worker",
  });
});
export const getAllWorkers: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        workers: "123",
      },
    });
  } catch (e) {
    console.log(e);
  }
});
