const Actor = require("../models/actor");

const actorData = [
  { first_name: "John", last_name: "Doe", age: 30 },
  { first_name: "Jane", last_name: "Doe", age: 28 },
  { first_name: "Alice", last_name: "Smith", age: 35 },
  { first_name: "Bob", last_name: "Brown", age: 40 },
  { first_name: "Charlie", last_name: "Black", age: 25 },
];

const seedActors = async () => {
  await Actor.bulkCreate(actorData);
};

module.exports = seedActors;
