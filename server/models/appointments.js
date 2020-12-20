'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // appt belongs to tutors
      models.Appointments.belongsTo(models.Tutors, { foreignKey: "tutor_id" });
      // appt belongs to students
      models.Appointments.belongsTo(models.Students, { foreignKey: "student_id" });
      // appt belongs to subjects (want to keep track of subjects taught)
      models.Appointments.belongsTo(models.Subjects, {
        foreignKey: "subject_id",
      });
    }
  };
  Appointments.init({
    subject_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    tutor_id: DataTypes.INTEGER,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    is_paid: DataTypes.BOOLEAN,
    total_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};