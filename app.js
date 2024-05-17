const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/config/database");
const seedActors = require("./src/seeders/actorSeeder");

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
const { actorRoutes, filmRoutes, categoryRoutes } = require("./src/routes");

app.use("/actors", actorRoutes);

// Synchronize database and start server
sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Database synchronized");

    // Seed the database
    await seedActors(); // Run the seeder
    console.log("Seeding complete");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
