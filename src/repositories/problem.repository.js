const { Problem } = require("../schema");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create(problemData);
      return problem;
    } catch (error) {
      console.log("Error while creating new problem");
      throw error;
    }
  }
}

module.exports = ProblemRepository;
