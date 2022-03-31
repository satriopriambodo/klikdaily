"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock.init(
    {
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Location is required" },
          notNull: { msg: "Location is required" },
        },
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Product is required" },
          notNull: { msg: "Product is required" },
        },
      },
      quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Quantity is required" },
          notNull: { msg: "Quantity is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Stock",
    }
  );
  return Stock;
};
