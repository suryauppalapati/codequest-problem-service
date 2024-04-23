const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const logger = require("../config/logger.config");

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
    logger.error(`An issue occured while creating new problem\n${error}`);
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
    logger.error(`An issue occured while fetching problem\n${error}`);
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
    logger.error(`An issue occured while retreving problems\n${error}`);
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
    logger.error(`An issue occured while updating problem\n${error}`);
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
    logger.error(`An issue occured while deleting problem with given id\n${error}`);
    next(error);
  }
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
