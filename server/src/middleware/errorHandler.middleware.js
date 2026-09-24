import buildFailureResponse from "../shared/utils/buildFailureResponse.js";

let errorHandler = (err, req, res, next) => {
  let errMessage = err.message;
  let errName = err.name;
  let errStatus = err.statusCode;

  return buildFailureResponse(res, errStatus, errMessage);
};

export default errorHandler;
