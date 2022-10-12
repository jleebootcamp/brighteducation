const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

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
    grade_level:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

   tutor_id:{
        type: DataTypes.INTEGER,
        references: {
            model :'tutor',
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