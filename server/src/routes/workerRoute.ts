import express from "express";
import * as workerController from "../controllers/workerController";
export const workerRouter = express.Router();
workerRouter
  .route("/")
  // get workers
  .get(workerController.getAllWorkers)
  // create worker
  .post(workerController.createWorker);

workerRouter
  .route("/:id")
  // get one worker
  .get(workerController.getWorker)
  // edit worker
  .put(workerController.editWorker)
  // delete worker
  .delete(workerController.deleteWorker);

export default workerRouter;
