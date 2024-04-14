function problemPingController(req, res) {
  return res.send("Problem controller is up and running!");
}

function addProblem(req, res) {
  return res.send("addProblem");
}

function getProblem(req, res) {
  return res.send("getProblem");
}

function getProblems(req, res) {
  return res.send("getProblems");
}

function updateProblem(req, res) {
  return res.send("updateProblem");
}

function deleteProblem(req, res) {
  return res.send("deleteProblem");
}

module.exports = { problemPingController, addProblem, getProblem, getProblems, updateProblem, deleteProblem };
