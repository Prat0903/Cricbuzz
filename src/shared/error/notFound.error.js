import AppError from "./app.error.js";
import { StatusCodes } from "http-status-codes";

class NotFound extends AppError {
  constructor(message, details = "") {
    super(message, StatusCodes.NOT_FOUND, details);
  }
}
