"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Schedules", {
      schedule_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      monday: {
        type: Sequelize.STRING,
      },
      tuesday: {
        type: Sequelize.STRING,
      },
      wednesday: {
        type: Sequelize.STRING,
      },
      thursday: {
        type: Sequelize.STRING,
      },
      friday: {
        type: Sequelize.STRING,
      },
      saturday: {
        type: Sequelize.STRING,
      },
      sunday: {
        type: Sequelize.STRING,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tutors",
          key: "tutor_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Schedules");
  },
};
