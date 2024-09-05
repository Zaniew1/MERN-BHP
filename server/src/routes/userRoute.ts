import express from "express";
import * as userController from "../controllers/userController";

export const userRouter = express.Router();

userRouter
  .route("/")
  // get Users
  .get(userController.getAllUsers)
  // create User
  .post(userController.createUser);

userRouter
  .route("/:id")
  // get one User
  .get(userController.getUser)
  // edit User
  .put(userController.editUser)
  // delete User
  .delete(userController.deleteUser);

export default userRouter;
