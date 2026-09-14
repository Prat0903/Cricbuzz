let notFound = (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    success: false,
  });
};

export default notFound;
