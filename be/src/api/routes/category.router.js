import express from "express";
import { categoryController } from "../controllers/index.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.findAll);
categoryRouter.post("/", categoryController.create);

export default categoryRouter;
