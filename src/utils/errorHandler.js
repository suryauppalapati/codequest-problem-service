const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/BaseError");

//Custom middleware to handle errors
function handleError(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      error: err.message,
      details: err.details,
    });
  } else {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
      details: {},
      error: err,
    });
  }
}

module.exports = handleError;
