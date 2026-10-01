import createApp from "./src/app.js";
import env from "./src/config/env.js";
import logger from "./src/config/logger.js";
import { connectDb } from "./src/database/database.js";
import http from "http";
import { Server } from "socket.io";
import { initSocket } from "./src/socket/socket.js";

let app = createApp();
let httpServer = http.createServer(app);
let io = new Server(httpServer, {
  cors: {
    origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
    methods: ["GET", "POST"],
  },
});

initSocket(io);

async function startServer() {
  try {
    await connectDb();
    httpServer.listen(env.PORT, () => {
      logger.info({ port: env.PORT }, "Server is running");
    });
  } catch (error) {
    logger.error({ error: error }, "Error while running server");
  }
}

startServer();
