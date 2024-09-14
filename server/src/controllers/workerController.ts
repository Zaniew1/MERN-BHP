import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";

import { z } from "zod";

const Worker = z.object({
  name: z.string().min(4).max(100),
  secondName: z.string().min(4).max(100),
  surname: z.string().min(4).max(100),
  region: z.string().min(4).max(100).optional(),
  city: z.string().min(2).max(100).optional(),
  postalcode: z.string().optional(),
  street: z.string().min(3).max(150).optional(),
  houseNumber: z.number().gt(0).lt(10000).optional(),
  pesel: z.number().gt(10).lt(12),
  mail: z.string().email({ message: "Invalid email address" }).min(4).max(100).optional(),
  phone: z.number().gt(8).lt(12),
  position: z.string().min(2).max(100).optional(),
});
export type Worker = z.infer<typeof Worker>;

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
