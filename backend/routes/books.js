const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// ✅ GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books); // 👈 MUST BE ARRAY
  } catch (err) {
    res.status(500).json([]);
  }
});

// ✅ ADD BOOK
router.post("/", async (req, res) => {
  try {
    const { title, author } = req.body;

    const newBook = new Book({ title, author });
    await newBook.save();

    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

module.exports = router;
