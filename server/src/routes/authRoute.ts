import express from "express";
import * as AuthController from "../controllers/authController";
export const authRouter = express.Router();

authRouter.post("/createNewUser", AuthController.register);
authRouter.post("/loginUser", AuthController.login);
authRouter.post("/forgetPassword", AuthController.forgetPassword);
authRouter.post("/logoutUser", AuthController.logout);
authRouter.post("/changePassword", AuthController.changePassword);
authRouter.patch("/resetPassword/:token", AuthController.resetPassword);

export default authRouter;
