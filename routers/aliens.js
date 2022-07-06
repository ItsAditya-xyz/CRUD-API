const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

//endpoint to fetch all aliens
router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.json({ message: err });
  }
});

//endpoint to save a new alien in DB
router.post("/", async (req, res) => {
  console.log(req.body);
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send(`Something went wrong: ${err}`);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const al = await alien.save();
    res.json(al);
  } catch (err) {
    res.json({ message: err });
  }
});

//endpoint to update an alien from DB
router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.json({ message: err });
  }
});

//endpoint to delete an alien from DB
router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.remove({ _id: req.params.id });
    res.json(alien);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
