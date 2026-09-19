import { StatusCodes } from "http-status-codes";

let buildSuccessResponse = (res, message, statusCode, data) => {
  let response = {
    success: true,
  };

  if (message) response.message = message;
  if (data) response.data = data;

  return res.status(statusCode || StatusCodes.OK).json(response);
};

export default buildSuccessResponse;
