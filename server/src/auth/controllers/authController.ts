import catchAsync from "../utils/catchAsync";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { z } from "zod";
import AppError from "../utils/appError";
import { DatabaseInstance } from "../../utils/database";

const newUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .trim()
      .min(3, "Name to short, 3 chars minimum")
      .max(50, "Name to long, 50 chars maximum"),
    surname: z.string().trim().min(2, "Surname to short, 2 chars minimum").max(50, "Surname to long, 50 chars maximum").optional(),
    email: z
      .string({
        required_error: "Email is required",
      })
      .trim()
      .email("Not a valid email")
      .min(5, "Email to short, 5 chars minimum")
      .max(50, "Email to long, 50 chars maximum"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "Password needs at least 8 chars, 1 number, 1 big letter and 1 special char",
      })
      .min(8, "Password to short, 8 chars minimum")
      .max(30, "Password to long, 30 chars maximum"),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .trim()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "Password needs 8 chars minimum, 1 number, 1 big letter and 1 special char",
      })
      .min(8, "Confirmation password to short, 8 chars minimum")
      .max(30, "Confirmation password to long, 30 chars maximum"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type newUserType = z.infer<typeof newUserSchema>;

export const register: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newUser = newUserSchema.parse(req.body) as newUserType;
  const { name, password, confirmPassword, email, surname } = newUser as newUserType;
  // we check if user with email already exists
  const userByEmail = await DatabaseInstance.findBy("user", { email });
  if (userByEmail) {
    return next(new AppError("There is user with that email already", 400));
  }

  // we send email with welcome Card component as welcome message
  // await new Email(email, name).sendWelcome();

  // create jwt token
  // createSendToken(newUser, 201, req, res);

  // we create user
  const user = await DatabaseInstance.create("user", { data: { name, surname, email, password, confirmPassword } });
  res.status(200).json({
    status: "successfully registered",
    data: { user },
  });
});
export const login: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully logged in ",
  });
});
export const forgetPassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully forget pass",
  });
});
export const logout: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully logout",
  });
});
export const changePassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully changed pass",
  });
});
export const resetPassword: RequestHandler<{ id: string }> = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "successfully reseted password",
  });
});
