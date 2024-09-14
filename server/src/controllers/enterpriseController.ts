import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { z } from "zod";

const Enterprise = z.object({
  name: z.string().min(4).max(100),
  nip: z.number().gt(9).lt(11).int().positive(),
  regon: z.number().gt(13).lt(15).int().positive().optional(),
  region: z.string().min(2).max(100).optional(),
  city: z.string().min(2).max(100).optional(),
  postalcode: z.string().optional(),
  street: z.string().min(3).max(150).optional(),
  houseNumber: z.number().gt(0).lt(10000).optional(),
  roomNumber: z.number().gt(0).lt(1000).optional(),
});
export type Enterprise = z.infer<typeof Enterprise>;

export const createEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  Enterprise.parse(req.body);

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
