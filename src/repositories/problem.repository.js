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

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log("Error while fetching problems");
      throw error;
    }
  }

  async getProblemById(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (error) {
      console.log("Error while fetching problem with given id");
      throw error;
    }
  }

  async updateProblem(problemId, problemData) {
    try {
      const problem = await Problem.findOneAndUpdate({ _id: problemId }, problemData, { new: true });
      return problem;
    } catch (error) {
      console.log("Error while updating problem with given id");
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deleteResponse = await Problem.findByIdAndDelete(problemId);
      return deleteResponse;
    } catch (error) {
      console.log("Error while deleting problem with given id");
      throw error;
    }
  }
}

module.exports = ProblemRepository;
