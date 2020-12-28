"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Tutors", "hourly_rate", {
        allowNull: true,
        type: Sequelize.INTEGER,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn("Tutors", "hourly_rate")]);
  },
};
