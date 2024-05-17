const express = require("express");
const router = express.Router();
const Actor = require("../models/actor");

router.get("/", async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
