import jwt from "jsonwebtoken";
import env from "../config/env.js";
import UnAuthorize from "../shared/error/unAuthorize.error.js";

let authMiddleware = (req, res, next) => {
  try {
    let token = req.cookies.accessToken;
    let payload = jwt.verify(token, env.JWT_ACCESS_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new UnAuthorize("Access token expired");
    }
    throw new UnAuthorize("Token not found");
  }
};

export default authMiddleware;
