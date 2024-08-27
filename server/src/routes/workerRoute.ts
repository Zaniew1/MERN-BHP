import express from "express";

export const workerRouter = express.Router();
// get all workers you own
workerRouter.get("/");

workerRouter
  .route("/:id")
  .get((req, res) => {
    // get one worker
    res.send("get user");
  })
  // create worker
  .post((req, res) => {
    res.send("register");
  })
  // edit worker
  .put((req, res) => {
    res.send("Update user");
  })
  // delete worker
  .delete((req, res) => {
    res.send("Delete user");
  });
