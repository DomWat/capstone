'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Appointments", {
      appointment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Subjects",
          key: "subject_id",
        },
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "student_id",
        },
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tutors",
          key: "tutor_id",
        },
      },
      start_time: {
        type: Sequelize.INTEGER,
      },
      end_time: {
        type: Sequelize.INTEGER,
      },
      is_paid: {
        type: Sequelize.BOOLEAN,
      },
      total_cost: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Appointments');
  }
};