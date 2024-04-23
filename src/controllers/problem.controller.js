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
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Successfully created new problem",
      data: newProblem,
    });
  } catch (error) {
    console.log("Error while creating new problem", error);
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      statusCode: StatusCodes.OK,
      message: "Successfully retrieved problem by Id",
      data: problem,
    });
  } catch (error) {
    console.log("Error while fetching problem", error);
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      statusCode: StatusCodes.OK,
      message: "Successfully fetched all problems",
      data: problems,
    });
  } catch (error) {
    console.log("Error while fetching problems", error);
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      statusCode: StatusCodes.OK,
      message: "Problem updated successfully",
      data: updatedProblem,
    });
  } catch (error) {
    console.log("Error while updating problem", error);
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deleteResponse = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      statusCode: StatusCodes.OK,
      message: "Problem deleted successfully",
      data: deleteResponse,
    });
  } catch (error) {
    console.log("Error while deleting problem", error);
    next(error);
  }
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
