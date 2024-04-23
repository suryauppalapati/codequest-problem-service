const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue) {
    super("Not Found", "Resource not found", { resourceName, resourceValue }, StatusCodes.NOT_FOUND);
  }
}

module.exports = NotFoundError;
