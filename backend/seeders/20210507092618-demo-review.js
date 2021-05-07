'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews', [
        
        {
          reviewText: "I like a lot",
          userId: 9,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reviewText: "Do not buy!",
          userId: 9,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reviewText: "Bad",
          userId: 8,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reviewText: "OK",
          userId: 8,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reviewText: "Good!",
          userId: 7,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
