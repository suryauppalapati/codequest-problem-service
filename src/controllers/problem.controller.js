const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const NotImplementedError = require("../errors/notImplemented.error");

const problemRepository = new ProblemRepository();
const problemService = new ProblemService(problemRepository);

function problemPingController(req, res) {
  return res.send("Problem controller is up and running!");
}

async function addProblem(req, res, next) {
  console.log("incoming req ::: ", req.body);
  try {
    const newProblem = await problemService.createProblem(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Successfully created new problem",
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
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

function updateProblem(req, res, next) {
  try {
    throw new NotImplementedError("Update problem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplementedError("Delete problem");
  } catch (error) {
    next(error);
  }
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
