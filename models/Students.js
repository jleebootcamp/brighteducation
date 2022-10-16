const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Students extends Model {}

Students.init(
  {
    // define columns
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    },
    
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'students',
  }
);
module.exports = Students;