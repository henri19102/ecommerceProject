const fs = require('fs');
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DBATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgresql',
    port: 5432
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized:false
      }
    }
  }
};
