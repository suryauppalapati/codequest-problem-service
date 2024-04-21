const { StatusCodes } = require("http-status-codes");
const errorHandler = require("../utils/errorHandler");
const NotImplementedError = require("../errors/notImplemented.error");

function problemPingController(req, res) {
  return res.send("Problem controller is up and running!");
}

function addProblem(req, res) {
  try {
    throw new NotImplementedError("Add problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    throw new NotImplementedError("Get problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplementedError("Get problems");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    throw new NotImplementedError("Update problem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    throw new NotImplementedError("Delete problem");
  } catch (error) {
    next(error);
  }
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
