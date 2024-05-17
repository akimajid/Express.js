const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dvdrental", "postgres", "pokemon411415", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
