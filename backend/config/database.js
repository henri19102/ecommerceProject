const Sequelize = require('sequelize')
const dotenv = require("dotenv")

dotenv.config();

module.exports = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { host: process.env.DB_HOST, dialect: "postgresql" }
  );

