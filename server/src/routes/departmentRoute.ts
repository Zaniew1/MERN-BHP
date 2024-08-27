import express from "express";

export const departmentRouter = express.Router();
// get all departments you own
departmentRouter.get("/");

departmentRouter
  .route("/:id")
  .get((req, res) => {
    // get one department
    res.send("get user");
  })
  // create department
  .post((req, res) => {
    res.send("register");
  })
  // edit department
  .put((req, res) => {
    res.send("Update user");
  })
  // delete department
  .delete((req, res) => {
    res.send("Delete user");
  });
