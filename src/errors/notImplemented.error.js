const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class NotImplementedError extends BaseError {
  constructor(methodName) {
    super("NotImplemented", `${methodName} not implemented!`, {}, StatusCodes.NOT_IMPLEMENTED);
  }
}

module.exports = NotImplementedError;
