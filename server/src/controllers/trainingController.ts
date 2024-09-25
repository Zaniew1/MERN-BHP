import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { DatabaseInstance } from "../utils/database";

export const createTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created training",
  });
});
export const deleteTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const training = await DatabaseInstance.delete("training", id);
  res.status(200).json({
    status: "successfully deleted training",
    data: {
      training,
    },
  });
});
export const editTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited training",
  });
});
export const getTraining: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const training = await DatabaseInstance.findById("training", id);
  res.status(200).json({
    status: "successfully get training",
    data: {
      training,
    },
  });
});
export const getAllTrainings: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const trainings = await DatabaseInstance.findBy("training", {
    where: {
      workerId: id,
    },
  });
  res.status(200).json({
    status: "success",
    data: {
      trainings,
    },
  });
});
