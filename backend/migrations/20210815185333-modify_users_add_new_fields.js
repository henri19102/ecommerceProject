'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn("Users", "lastname", { type: Sequelize.STRING, allowNull: true });
     await queryInterface.addColumn("Users", "address", { type: Sequelize.STRING, allowNull: true });
     await queryInterface.addColumn("Users", "phonenumber", { type: Sequelize.INTEGER, allowNull: true });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
