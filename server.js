import createApp from "./src/app.js";
import env from "./src/config/env.js";
import logger from "./src/config/logger.js";
import { connectDb } from "./src/database/database.js";

let app = createApp();

async function startServer() {
  try {
    await connectDb();
    app.listen(env.PORT, () => {
      logger.info({ port: env.PORT }, "Server is running");
    });
  } catch (error) {
    logger.error({ error: error }, "Error while running server");
  }
}

startServer();
