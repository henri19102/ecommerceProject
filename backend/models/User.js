"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: "userId"
      });
      User.hasMany(models.Review, {
        foreignKey: "userId"
      });
      User.hasMany(models.Rating, {
        foreignKey: "userId"
      });
      User.hasMany(models.Like, {
        foreignKey: "userId"
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      lastname: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
