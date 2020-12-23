'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Tutors", "description", {
      type: Sequelize.TEXT
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Tutors", "description")
  }
};
