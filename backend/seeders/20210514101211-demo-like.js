"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Likes", [
      {
        userId: 10,
        reviewId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 12,
        reviewId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
