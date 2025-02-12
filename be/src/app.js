import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import {
  handleBadRequest,
  handleNotFound,
  handleServerErrors,
} from "./api/middlewares/index.js";

import router from "./api/routes/index.js";
import cors from "cors";
import "./api/config/firebaseAdmin.js";
import instanceMongoDb from "./api/database/connect.mongodb.js";

const app = express();
dotenv.config();

instanceMongoDb;

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.set("json replacer", (key, value) => {
  if (typeof value === "object" && value !== null) {
    return JSON.parse(JSON.stringify(value));
  }
  return value;
});

app.use(
  cors({
    origin: ["http://localhost:8000"],
    methods: "GET, POST, PUT, DELETE, OPTIONS",
  })
);

// code .
app.use("/api/v1", router);
app.use(handleBadRequest);
app.use(handleNotFound);
app.use(handleServerErrors);

export { app };
