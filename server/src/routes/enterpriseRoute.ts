import express from "express";

export const enterpriseRouter = express.Router();
// get all enterprises you own
enterpriseRouter.get("/");

enterpriseRouter
  .route("/:id")
  .get((req, res) => {
    // get one enterprise
    res.send("get user");
  })
  // create enterprise
  .post((req, res) => {
    res.send("register");
  })
  // edit enterprise
  .put((req, res) => {
    res.send("Update user");
  })
  // delete enterprise
  .delete((req, res) => {
    res.send("Delete user");
  });
