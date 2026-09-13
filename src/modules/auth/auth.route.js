import express from "express";
import passport from "passport";
import AuthController from "./auth.controller.js";

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
  authController.GoogleCallback.bind(authController),
);

// router.get("/me", authController.getMe.bind(authController));

export default router;
