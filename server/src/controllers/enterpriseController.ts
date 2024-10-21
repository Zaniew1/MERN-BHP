import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { DatabaseInstance } from "../utils/database";
import { newEnterpriseSchema, newEnterpriseType } from "../utils/zodSchemas/enterpriseSchema";

export const createEnterprise: RequestHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  newEnterpriseSchema.parse(req.body);
  const { name, nip, regon, region, city, postalcode, street, houseNumber, roomNumber } = req.body as newEnterpriseType;
  const enterprise = await DatabaseInstance.create("department", { name, nip, regon, region, city, postalcode, street, houseNumber, roomNumber });

  res.status(201).json({
    status: "successfully created enterprises",
    data: {
      enterprise,
    },
  });
});
export const editEnterprise: RequestHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  newEnterpriseSchema.parse(req.body);
  const { name, nip, regon, region, city, postalcode, street, houseNumber, roomNumber } = req.body as newEnterpriseType;
  const enterprise = await DatabaseInstance.update("department", { name, nip, regon, region, city, postalcode, street, houseNumber, roomNumber });

  res.status(200).json({
    status: "successfully edited enterprises",
    data: {
      enterprise,
    },
  });
});
export const deleteEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const enterprise = await DatabaseInstance.delete("department", id);
  res.status(200).json({
    status: "successfully deleted enterprises",
    data: {
      enterprise,
    },
  });
});

export const getEnterprise: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const enterprise = await DatabaseInstance.findById("enterprise", id);
  res.status(200).json({
    status: "successfully get enterprises",
    data: {
      enterprise,
    },
  });
});
export const getAllEnterprises: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const enterprises = await DatabaseInstance.findBy("enterprise", {
    where: {
      authorId: id,
    },
  });
  res.status(200).json({
    status: "success get all enterprises",
    data: {
      enterprises,
    },
  });
});
