import { StatusCodes } from "http-status-codes";
import buildFailureResponse from "../shared/utils/buildFailureResponse.js";

let errorHandler = (err, req, res, next) => {
  let errMessage = err.message;
  let errName = err.name;
  let errStatus = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  if (
    errName === "TokenExpiredError" ||
    errName === "JsonWebTokenError" ||
    errName === "NotBeforeError"
  ) {
    return buildFailureResponse(
      res,
      "Refresh token expired",
      StatusCodes.UNAUTHORIZED,
    );
  }

  return buildFailureResponse(res, errStatus, errMessage);
};

export default errorHandler;
