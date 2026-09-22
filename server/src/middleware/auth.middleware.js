import jwt from "jsonwebtoken";
import env from "../config/env.js";
import UnAuthorize from "../shared/error/unAuthorize.error.js";

export let authMiddleware = (req, res, next) => {
  try {
    let token = req.cookies.accessToken;
    let payload = jwt.verify(token, env.JWT_ACCESS_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnAuthorize("Access token expired");
  }
};

export let authorizationMiddleware = (role) => {
  return (req, res, next) => {
    if (role.includes(req.user.role)) {
      next();
    } else {
      throw new UnAuthorize("Invalid role");
    }
  };
};
