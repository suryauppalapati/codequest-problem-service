const express = require("express");
const { ProblemController } = require("../../controllers");

const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.problemPingController);

problemRouter.get("/:id", ProblemController.getProblem);
problemRouter.get("/", ProblemController.getProblems);
problemRouter.post("/add", ProblemController.addProblem);
problemRouter.put("/:id", ProblemController.updateProblem);
problemRouter.delete("/:id", ProblemController.deleteProblem);

module.exports = problemRouter;
