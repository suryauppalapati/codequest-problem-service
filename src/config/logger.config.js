const winston = require("winston");

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console());

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  ),
  transports: allowedTransports,
});

module.exports = logger;
