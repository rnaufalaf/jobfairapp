const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.post("/login", UserController.login);
userRoute.post("/register", UserController.register);
userRoute.get("/details", UserController.getUser);

module.exports = userRoute;
