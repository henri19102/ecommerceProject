'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ratings', [
        
      {
        starRating: 1,
        userId: 8,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starRating: 4,
        userId: 9,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starRating: 5,
        userId: 7,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starRating: 1,
        userId: 6,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starRating: 2,
        userId: 5,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starRating: 1,
        userId: 4,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('Ratings', null, {});
     
  }
};
