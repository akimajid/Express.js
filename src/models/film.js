const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./category");

const Film = sequelize.define("film", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
});

Film.belongsTo(Category, { foreignKey: "category_id" });

module.exports = Film;
