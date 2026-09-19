import { StatusCodes } from "http-status-codes";

let buildFailureResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    messgae: message,
  });
};

export default buildFailureResponse;
