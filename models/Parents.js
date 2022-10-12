const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Parents extends Model {}

Parents.init(
  {
    // define columns
    parent_id: {
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
      student_id: {
        type: DataTypes.INTEGER,
        references: {
            model : 'students',
            key: 'student_id',
        },
      },
    },
    
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'parents',
  }
);
module.exports = Parents;