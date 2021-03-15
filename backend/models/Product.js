const Sequelize = require('sequelize')
const db = require('../config/database')

const Product = db.define("products", {
    name: Sequelize.TEXT,
    count: Sequelize.INTEGER,
  });

module.exports = Product