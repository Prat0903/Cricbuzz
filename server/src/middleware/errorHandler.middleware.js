import buildFailureResponse from "../shared/utils/buildFailureResponse.js";
import { StatusCodes } from "http-status-codes";

let errorHandler = (err, req, res, next) => {
  let errMessage = err.message;
  let errName = err.name;
  let errStatus = err.statusCode;

  return buildFailureResponse(res, errStatus, errMessage);
};

export default errorHandler;
