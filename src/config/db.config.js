const mongoose = require("mongoose");
const { DB_URL } = require("./server.config");
const logger = require("./logger.config");

async function connectToDB() {
  try {
    await mongoose.connect(DB_URL);
    logger.info("Database connection successful");
  } catch (error) {
    logger.info(`Unable to connect database server\n${error}`);
  }
}

module.exports = connectToDB;
