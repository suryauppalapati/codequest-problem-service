const BaseError = require("./index");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends BaseError {
  constructor(message, errorDetails) {
    super("Bad Request", message, errorDetails, StatusCodes.BAD_REQUEST);
  }
}

module.exports = BadRequestError;
