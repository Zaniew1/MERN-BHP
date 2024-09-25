import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { DatabaseInstance } from "../utils/database";

import { z } from "zod";

const Department = z.object({
  name: z.string().min(4).max(100),
});
export type Department = z.infer<typeof Department>;

export const createDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully created department",
  });
});
export const deleteDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const department = await DatabaseInstance.delete("department", id);
  res.status(200).json({
    status: "successfully deleted department",
    data: {
      department,
    },
  });
});
export const editDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully edited department",
  });
});
export const getDepartment: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const department = await DatabaseInstance.findById("department", id);
  res.status(200).json({
    status: "successfully  get department",
    data: {
      department,
    },
  });
});
export const getAllDepartments: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const departments = await DatabaseInstance.findBy("department", {
    where: {
      enterpriseId: id,
    },
  });
  res.status(200).json({
    status: "success get all departments",
    data: {
      departments,
    },
  });
});
