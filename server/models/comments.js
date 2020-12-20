'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Comments belongs to Students (they are written by the students)
      models.Comments.belongsTo(models.Students, { foreignKey: "student_id"});
      // Comments belongs to Tutors (they are about the tutors)
      models.Comments.belongsTo(models.Tutors, { foreignKey: "tutor_id" });
    }
  };
  Comments.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    student_id: DataTypes.INTEGER,
    tutor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};