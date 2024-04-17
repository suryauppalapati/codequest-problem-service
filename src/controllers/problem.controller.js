const { StatusCodes } = require("http-status-codes");

function problemPingController(req, res) {
  return res.send("Problem controller is up and running!");
}

function addProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
