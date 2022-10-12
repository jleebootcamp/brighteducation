const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tutors extends Model {}

Tutors.init(
  {
    // define columns
    tutor_id: {
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
      years_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
        isNumeric: true,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutors',
  }
);

module.exports = Tutors ;