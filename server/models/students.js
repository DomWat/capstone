'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // students has many comments
      models.Students.hasMany(models.Comments, { foreignKey: "student_id" });
      // students has many appts
      models.Students.hasMany(models.Appointments, { foreignKey: "student_id" });
    }
    
  };
  Students.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};