const express = require("express");
const router = express.Router();
const Film = require("../models/film");

router.get("/films", async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/films/:id", async (req, res) => {
  const filmId = req.params.id;
  try {
    const film = await Film.findByPk(filmId);
    if (film) {
      res.json(film);
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/films/category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const films = await Film.findAll({
      where: { categoryId: categoryId },
    });
    res.json(films);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
