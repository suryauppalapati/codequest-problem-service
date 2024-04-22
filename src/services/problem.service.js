const { sanitizeMarkdown } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = sanitizeMarkdown(problemData.description);
      const newProblem = await this.problemRepository.createProblem(problemData);

      return newProblem;
    } catch (error) {
      console.log("Error while creating a new problem", error);
      throw error;
    }
  }
}

module.exports = ProblemService;
