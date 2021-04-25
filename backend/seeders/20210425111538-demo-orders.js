'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      orderStatus: "In progress",
      userId: 9,
      productId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderStatus: "In progress",
      userId: 9,
      productId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderStatus: "In progress",
      userId: 9,
      productId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderStatus: "In progress",
      userId: 9,
      productId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 5,
      productId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 5,
      productId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 5,
      productId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 5,
      productId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 5,
      productId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      orderStatus: "In progress",
      userId: 8,
      productId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],

    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
