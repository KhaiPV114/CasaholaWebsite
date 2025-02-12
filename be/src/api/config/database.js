import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

dotenv.config({ path: path.join(__dirname, "../../.env") });

export default {
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  host: process.env.DB_HOST || "localhost",
};
