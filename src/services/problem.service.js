const { sanitizeMarkdown } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = sanitizeMarkdown(problemData.description);
      const newProblem = await this.problemRepository.createProblem({
        title: problemData.title,
        description: problemData.description,
        testcases: problemData.testcases ? testcases : [],
      });

      return newProblem;
    } catch (error) {
      console.log("Error while creating a new problem");
      throw error;
    }
  }
}

module.exports = ProblemService;
