const BaseError = require("./index");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(message, errorDetails) {
    super("Not Found", message, errorDetails, StatusCodes.NOT_FOUND);
  }
}

module.exports = NotFoundError;
