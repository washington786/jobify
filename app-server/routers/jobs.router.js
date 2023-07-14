const express = require("express");

const jobsRouter = express.Router();

jobsRouter.post("/create", function (req, res) {
  res.send("create job page");
});
jobsRouter.delete("/delete/:id", function (req, res) {
  res.send("delete page");
});
jobsRouter.get("/", function (req, res) {
  res.send("all jobs page");
});
jobsRouter.get("/:id", function (req, res) {
  res.send("job details page");
});
jobsRouter.patch("/update/:id", function (req, res) {
  res.send("update job page");
});

// jobsRouter.get('/job/:id', function (req, res){
//     res.send(' pages')
// });

module.exports = jobsRouter;
