"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Schedules belongs to Tutors
      models.Schedules.belongsTo(models.Tutors, { foreignKey: "tutor_id" });
    }
  }
  Schedules.init(
    {
      schedule_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      monday: DataTypes.STRING,
      tuesday: DataTypes.STRING,
      wednesday: DataTypes.STRING,
      thursday: DataTypes.STRING,
      friday: DataTypes.STRING,
      saturday: DataTypes.STRING,
      sunday: DataTypes.STRING,
      tutor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedules",
    }
  );
  return Schedules;
};
