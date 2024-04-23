class BaseError extends Error {
  constructor(name, message, details, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = name;
  }
}

module.exports = BaseError;
