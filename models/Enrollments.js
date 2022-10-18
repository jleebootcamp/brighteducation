const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Enrollments extends Model {}

Enrollments.init(
  {
    // define columns
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_id:{
        type: DataTypes.INTEGER,
        references: {
            model :'subjects',
            key:'subject_id',
        },
      },
      student_id:{
        type: DataTypes.INTEGER,
        references: {
            model :'students',
            key:'student_id',
        },
      },
      tutor_id:{
        type: DataTypes.INTEGER,
        references: {
            model :'tutors',
            key:'tutor_id',
        },
      },
    },
    
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'enrollments',
  }
);
module.exports = Enrollments;