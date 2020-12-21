'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Subjects belongs to tutors
      models.Subjects.belongsTo(models.Tutors, { foreignKey: "tutor_id" });
      // subjects has many appts
      models.Subjects.hasMany(models.Appointments, { foreignKey: "subject_id" });
    }
  };
  Subjects.init(
    {
      subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      subject_name: DataTypes.STRING,
      sub_subject_name: DataTypes.STRING,
      tutor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subjects",
    }
  );
  return Subjects;
};