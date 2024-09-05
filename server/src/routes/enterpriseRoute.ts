import express from "express";
import * as enterpriseController from "../controllers/enterpriseController";

export const enterpriseRouter = express.Router();
enterpriseRouter
  .route("/")
  // get Enterprises
  .get(enterpriseController.getAllEnterprises)
  // create Enterprise
  .post(enterpriseController.createEnterprise);

enterpriseRouter
  .route("/:id")
  // get one Enterprise
  .get(enterpriseController.getEnterprise)
  // edit Enterprise
  .put(enterpriseController.editEnterprise)
  // delete Enterprise
  .delete(enterpriseController.deleteEnterprise);

export default enterpriseRouter;
