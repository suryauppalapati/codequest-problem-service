const { Problem } = require("../schema");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testcases: problemData.testcases ? problemData.testcases : [],
      });
      return problem;
    } catch (error) {
      console.log("Error while creating new problem");
      throw error;
    }
  }
}

module.exports = ProblemRepository;
