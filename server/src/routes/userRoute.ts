import express from "express";

export const userRouter = express.Router();

userRouter
  .route("/:id")
  .get((req, res) => {
    res.send("get user");
  })
  .post((req, res) => {
    res.send("register");
  })
  .put((req, res) => {
    res.send("Update user");
  })
  .delete((req, res) => {
    res.send("Delete user");
  });
