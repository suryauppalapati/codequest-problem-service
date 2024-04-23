const mongoose = require("mongoose");
const { DB_URL } = require("./server.config");

async function connectToDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Unable to connect database server");
    console.log(error);
  }
}

module.exports = connectToDB;
