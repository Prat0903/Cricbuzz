import express from "express";
import env from "./config/env.js";
import morgan from "morgan";
import securityMiddleware from "./middleware/security.middleware.js";
import googleOAuthMiddleware from "./middleware/googleOAuth.middleware.js";
import authRouter from "./modules/auth/auth.route.js";
import errorHandler from "./middleware/errorHandler.middleware.js";

export default function createApp() {
  let app = express();

  if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  securityMiddleware(app);
  googleOAuthMiddleware(app);

  app.use("/api/auth", authRouter);

  app.use(errorHandler);

  return app;
}
