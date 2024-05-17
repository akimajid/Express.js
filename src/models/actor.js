const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Actor = sequelize.define("actor", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Actor;
