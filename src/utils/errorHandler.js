const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors");

//Custom middleware to handle errors
function handleError(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
      errors: err.details,
    });
  } else {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
      errors: err,
    });
  }
}

module.exports = handleError;
