const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const handleError = require("./utils/errorHandler");
const apiRouter = require("./routes");
const connectToDB = require("./config/db.config");
const logger = require("./config/logger.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.send("Problem service up and running!");
});

//Custom middleware to handle errors
app.use(handleError);

app.listen(PORT, async () => {
  logger.info(`Server started listenig at Port ${PORT}`);
  await connectToDB(); //initiate database connection
});
