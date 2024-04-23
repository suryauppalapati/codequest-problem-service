const { NotFoundError } = require("../errors");
const { sanitizeMarkdown } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = sanitizeMarkdown(problemData.description);
    const newProblem = await this.problemRepository.createProblem(problemData);
    return newProblem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblemById(problemId);
    if (!problem) throw new NotFoundError("Problem", problemId);
    return problem;
  }

  async updateProblem(problemId, problemData) {
    const updatedProblem = await this.problemRepository.updateProblem(problemId, problemData);
    return updatedProblem;
  }

  async deleteProblem(problemId) {
    const deleteResponse = await this.problemRepository.deleteProblem(problemId);
    if (!deleteResponse.deletedCount) throw new NotFoundError("Problem", problemId);
    return deleteResponse;
  }
}

module.exports = ProblemService;
