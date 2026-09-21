import express from "express";
import passport from "passport";
import AuthController from "./auth.controller.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

let router = express.Router();
let authController = new AuthController();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
    session: false,
  }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  asyncHandler(authController.GoogleCallback.bind(authController)),
);

router.get(
  "/refreshToken",
  asyncHandler(authController.getRefreshAccessToken.bind(authController)),
);

router.get(
  "/me",
  authMiddleware,
  asyncHandler(authController.getMe.bind(authController)),
);

export default router;
