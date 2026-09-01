import createApp from "./src/app.js";
import env from "./src/config/env.js";
import logger from "./src/config/logger.js";
import { connectDb } from "./src/database/database.js";

let app = createApp();

function startServer() {
  connectDb()
    .then(() => {
      app.listen(env.PORT, () => {
        logger.info({ port: env.PORT }, "Server is running");
      });
    })
    .catch((err) => {
      logger.error({ error: err }, "Error while running server");
    });
}

startServer();
