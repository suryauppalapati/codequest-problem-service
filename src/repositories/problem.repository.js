const logger = require("../config/logger.config");
const { Problem } = require("../schema");

class ProblemRepository {
  async createProblem(problemData) {
    const problem = await Problem.create({
      title: problemData.title,
      description: problemData.description,
      testcases: problemData.testcases ? problemData.testcases : [],
    });
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find();
    return problems;
  }

  async getProblemById(problemId) {
    const problem = await Problem.findById(problemId);
    return problem;
  }

  async updateProblem(problemId, problemData) {
    const problem = await Problem.findOneAndUpdate({ _id: problemId }, problemData, { new: true });
    return problem;
  }

  async deleteProblem(problemId) {
    const deleteResponse = await Problem.findByIdAndDelete(problemId);
    return deleteResponse;
  }
}

module.exports = ProblemRepository;
