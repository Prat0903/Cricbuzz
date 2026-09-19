import { StatusCodes } from "http-status-codes";

let notFound = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "Route not found",
    success: false,
  });
};

export default notFound;
