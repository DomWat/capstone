"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tutors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Tutor has many subjects
      models.Tutors.hasMany(models.Subjects, { foreignKey: "tutor_id" });
      // Tutor has many comments (about them)
      models.Tutors.hasMany(models.Comments, { foreignKey: "tutor_id" });
      // Tutors have one availability each
      models.Tutors.hasOne(models.Schedules, { foreignKey: "tutor_id" });
      // Tutors has many appts
      models.Tutors.hasMany(models.Appointments, { foreignKey: "tutor_id" });
    }
  }
  Tutors.init(
    {
      tutor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hourly_rate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tutors",
    }
  );
  return Tutors;
};
