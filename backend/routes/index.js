const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("Index Route");
});

const user = require("./userRoutes");
route.use("/user", user);

const job = require("./jobRoutes");
route.use("/job", job);

module.exports = route;
