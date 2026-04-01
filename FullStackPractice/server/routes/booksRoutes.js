import express from "express";
import { Book } from "../models/books.js";

const router = express.Router();

//GET ALL BOOKS - READ OPERATION
router.get("/books", async (req, res) => {
  console.log("GET /books called");
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(404).json({ error: "There are no books." });
    }
    res.json(books);
  } catch (err) {
    //500 --> Internal Server Error
    res.status(500).json({ error: err.message });
  }
});

//GET ONE BOOK - READ OPERATION
router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`GET /books/${id} called`);
  try {
    // const book = await Book.findById(id);
    // const book = await Book.findOne({"title":"Eloquent JavaScript"});
    const book = await Book.findOne({ _id: id });
    if (!book) {
      return res.status(404).json({ error: "There are no such book." });
    }
    res.json(book);
  } catch (err) {
    //500 --> Internal Server Error
    res.status(500).json({ error: err.message });
  }
});

//POST BOOK - CREATE OPERATION
router.post("/books", async (req, res) => {
  console.log("POST /books called");
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    //500 --> Internal Server Error
    res.status(500).json({ error: err.message });
  }
});

//PUT BOOK - UPDATE OPERATION
router.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`PUT /books/${id} called`);
  try {
    const upatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!upatedBook) {
      return res.status(404).json({ error: "There are no such book." });
    }
    res.json(upatedBook);
  } catch (err) {
    //500 --> Internal Server Error
    res.status(500).json({ error: err.message });
  }
});

//DELETE BOOK - DELETE OPERATION
router.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /books/${id} called`);
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "There are no such book." });
    }
    res.json(deletedBook);
  } catch (err) {
    //500 --> Internal Server Error
    res.status(500).json({ error: err.message });
  }
});
export default router;
