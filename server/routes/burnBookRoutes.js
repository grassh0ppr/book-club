const express = require("express");
const BurnBook = require("../models/BurnBook");
const router = express.Router();

// GET all burn book entries
router.get("/", async (req, res) => {
  try {
    const entries = await BurnBook.find().populate("createdBy", "username");
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// POST a new rant
router.post("/", async (req, res) => {
  try {
    const { bookTitle, rant, rating, tags } = req.body;
    const newEntry = new BurnBook({
      bookTitle,
      rant,
      rating,
      tags,
      createdBy,
    });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
