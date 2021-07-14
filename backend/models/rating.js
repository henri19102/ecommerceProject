"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      });
      Rating.belongsTo(models.Product, {
        foreignKey: "productId",
        onDelete: "CASCADE"
      });
    }
  }
  Rating.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      starRating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Rating"
    }
  );
  return Rating;
};
