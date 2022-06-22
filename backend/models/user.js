"use strict";
const { Model } = require("sequelize");

const { encrypt } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
