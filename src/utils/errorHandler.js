const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors");

function handleError(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      details: err.details,
    });
  } else {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
      details: {
        statusCode: res.status,
      },
    });
  }
}

module.exports = handleError;
