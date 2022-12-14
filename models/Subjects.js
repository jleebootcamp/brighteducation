const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subjects extends Model {}

Subjects.init(
  {
    // define columns
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },    
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade_level:{
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'subjects',
  }
);

module.exports = Subjects;