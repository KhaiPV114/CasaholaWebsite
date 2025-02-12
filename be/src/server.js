import dotenv from "dotenv";
import os from "os";
import { app } from "./app.js";
import http from "http";
import getPhysicalIPv4 from "./api/config/ipC.js";

// Load environment variables from .env file
dotenv.config();


async function startServer() {
  try {
    const localIP = getPhysicalIPv4();
    console.log("IP: ", localIP);

    const PORT = process.env.PORT || 3000;
    const HOSTNAME = localIP || "localhost";

    var server = http.createServer(app);

    server.listen(PORT, HOSTNAME, () => {
      console.log(`Server running at: http://${HOSTNAME}:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
