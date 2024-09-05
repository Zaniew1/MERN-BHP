import express from "express";
import * as departmentController from "../controllers/departmentController";
export const departmentRouter = express.Router();
departmentRouter
  .route("/")
  // get departments
  .get(departmentController.getAllDepartments)
  // create department
  .post(departmentController.createDepartment);

departmentRouter
  .route("/:id")
  // get one department
  .get(departmentController.getDepartment)
  // edit department
  .put(departmentController.editDepartment)
  // delete department
  .delete(departmentController.deleteDepartment);

export default departmentRouter;
