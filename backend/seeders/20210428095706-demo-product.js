'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'housut',
      price: 15,
      count: 88,
      category: 'vaatteet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'paita',
      price: 15,
      count: 88,
      category: 'vaatteet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'hattu',
      price: 15,
      count: 88,
      category: 'vaatteet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'kengät',
      price: 15,
      count: 88,
      category: 'vaatteet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'farkut',
      price: 15,
      count: 88,
      category: 'vaatteet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
