import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { DatabaseInstance } from "../utils/database";
// import { z } from "zod";
// const UserSchema = z.object({
//   name: z.string().min(4).max(100),
//   surname: z.string().min(4).max(100),
//   email: z.string().email({ message: "Invalid email address" }).min(4).max(100).optional(),
// });
// export type UserType = z.infer<typeof UserSchema>;

export const editUser: RequestHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, surname } = req.body;
  const user = await DatabaseInstance.update("user", { where: { id }, data: { name, surname } });
  res.status(200).json({
    status: "success: successfully edited user",
    data: {
      user,
    },
  });
});
export const deleteUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body as { id: number };
  const user = await DatabaseInstance.delete("user", id);
  res.status(200).json({
    status: "success: successfully deleted user",
    data: {
      user,
    },
  });
});
export const getUser: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  const user = await DatabaseInstance.findById("user", id);
  res.status(200).json({
    status: "success: successfully get user",
    data: {
      user,
    },
  });
});
export const getAllUsers: RequestHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const users = await DatabaseInstance.findMany("user");
  res.status(200).json({
    status: "success: successfully get user",
    data: {
      users,
    },
  });
});
