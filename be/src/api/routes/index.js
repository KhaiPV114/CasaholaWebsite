import express from "express";
import authRouter from "./auth.router.js";
import categoryRouter from "./category.router.js";
import productRouter from "./product.router.js";

const router = express.Router();
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);

export default router;
