'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'pallo',
      price: 15,
      count: 88,
      category: 'urheilu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'maali',
      price: 15,
      count: 88,
      category: 'urheilu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'gameboy',
      price: 15,
      count: 88,
      category: 'pelikoneet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'gamecube',
      price: 15,
      count: 88,
      category: 'pelikoneet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ps5',
      price: 15,
      count: 88,
      category: 'pelikoneet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
