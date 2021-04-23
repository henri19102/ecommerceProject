'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'lehti',
      price: 15,
      count: 88,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tuoli',
      price: 888,
      count: 199,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'kirja',
      price: 30,
      count: 145,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
