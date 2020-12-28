'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Appointments", "start_time", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.addColumn("Appointments", "end_time", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Appointments", "start_time"),
      queryInterface.removeColumn("Appointments", "end_time"),
    ]);
  }
};
