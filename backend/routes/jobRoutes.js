const jobRoute = require("express").Router();
const JobController = require("../controllers/JobController");

jobRoute.get("/", JobController.getJobList);
jobRoute.get("/:id", JobController.getJobDetails);

module.exports = jobRoute;
