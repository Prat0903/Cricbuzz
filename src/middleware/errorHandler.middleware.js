import { StatusCodes } from "http-status-codes";

let errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    success: false,
  });
};

export default errorHandler;
