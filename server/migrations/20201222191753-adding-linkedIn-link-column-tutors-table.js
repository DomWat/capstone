'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Tutors", "linkedIn_url", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Tutors", "linkedIn_url");
  }
};
