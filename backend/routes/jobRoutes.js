const jobRoute = require("express").Router();
const JobController = require("../controllers/JobController");

jobRoute.get("/", JobController.getJobList);
jobRoute.get("/details", JobController.getJobDetails);

module.exports = jobRoute;
