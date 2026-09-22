let buildFailureResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default buildFailureResponse;
