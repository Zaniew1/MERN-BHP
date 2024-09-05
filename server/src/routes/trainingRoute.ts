import express from "express";
import * as trainingController from "../controllers/trainingController";

export const trainingRouter = express.Router();
// get all trainings you own
trainingRouter
  .route("/")
  // get Trainings
  .get(trainingController.getAllTrainings)
  // create department
  .post(trainingController.createTraining);

trainingRouter
  .route("/:id")
  // get one Training
  .get(trainingController.getTraining)
  // edit Training
  .put(trainingController.editTraining)
  // delete Training
  .delete(trainingController.deleteTraining);

export default trainingRouter;
