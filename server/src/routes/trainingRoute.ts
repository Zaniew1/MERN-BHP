import express from "express";

export const trainingRouter = express.Router();
// get all trainings you own
trainingRouter.get("/");

trainingRouter
  .route("/:id")
  .get((req, res) => {
    // get one training
    res.send("get user");
  })
  // create training
  .post((req, res) => {
    res.send("register");
  })
  // edit training
  .put((req, res) => {
    res.send("Update user");
  })
  // delete training
  .delete((req, res) => {
    res.send("Delete user");
  });
