const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      let emailFound = await User.findOne({
        where: { email: email },
      });
      if (emailFound) {
        if (decrypt(password, emailFound.password)) {
          let token = tokenGenerator(emailFound);
          res.status(200).json({ message: "Logged In!", token });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching user data" });
    }
  }
  static async register(req, res) {
    const { email, username, password, phone, country, image } = req.body;
    try {
      await User.create({ email, username, password, phone, country, image });
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating user" });
    }
  }
  static async getUser(req, res) {}
}

module.exports = UserController;
