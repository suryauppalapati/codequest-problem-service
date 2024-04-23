const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor() {
    super("Internal Server Error", "Something went wrong!!", {}, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = InternalServerError;
