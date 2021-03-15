const Sequelize = require('sequelize')
const db = require('../config/database')

const User = db.define("users", {
    name: Sequelize.TEXT,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT,
  });

module.exports = User