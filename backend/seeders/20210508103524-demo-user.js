"use strict";
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "henri",
          email: "timi@mail.fi",
          password: hashedPassword,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
