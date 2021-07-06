"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Pants",
        price: 15,
        count: 88,
        category: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shirt",
        price: 10,
        count: 88,
        category: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cap",
        price: 5,
        count: 88,
        category: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gameboy",
        price: 150,
        count: 88,
        category: "Gaming",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xbox",
        price: 499,
        count: 88,
        category: "Gaming",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Playstation 5",
        price: 555,
        count: 88,
        category: "Gaming",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bread",
        price: 2,
        count: 88,
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Milk",
        price: 1.5,
        count: 88,
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Meat",
        price: 8,
        count: 88,
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheese",
        price: 4.5,
        count: 88,
        category: "Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bicycle",
        price: 267,
        count: 88,
        category: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basketball",
        price: 24,
        count: 88,
        category: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Football",
        price: 23,
        count: 88,
        category: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
