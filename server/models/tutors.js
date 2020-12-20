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
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      hourly_rate: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tutors",
    }
  );
  return Tutors;
};
