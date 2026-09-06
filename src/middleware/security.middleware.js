import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cors from "cors";
import rateLimit from "express-rate-limit";
import express from "express";
import env from "../config/env.js";

export default function securityMiddleware (app) {
  app.use(helmet());

  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
      credentials: true,
    }),
  );

  app.use(
    rateLimit({
      windowMs: env.RATELIMIT_WINDOWMS,
      limit: env.RATELIMIT,
      message: "Too many requests, try again after few minutes",
      legacyHeaders: true,
    }),
  );

  app.use(hpp());
  app.use(compression());

  app.use(express.json({ limit: "3mb" }));
  app.use(express.urlencoded({ extended: true, limit: "3mb" }));
};
