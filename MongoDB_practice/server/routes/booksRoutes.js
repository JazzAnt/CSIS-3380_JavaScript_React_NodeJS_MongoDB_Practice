import express from "express";

//import the model
import { Book } from "../models/books.js";

const router = express.Router();

//read the mongoose docs to see what methods are available for CRUD
//www.mongodb.com/resources/products/fundamentals/crud

/**
 * GET / READ
 */
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find(); //find returns an array of objects
    if (books.length === 0) {
      return res.status(404).json({ error: "Database is empty" }); //response is easier to work with if json
    }
    //res.json() is like res.send() but returns the data as json
    res.json(books); //books converted from array to json and sent
  } catch (err) {
    //500 --> internal server error
    res.status(500).json({ error: err.message });
  }
});

router.get("/books/:id", async (req, res) => {
  //process url params
  const { id } = req.params;

  try {
    const book = await Book.findById(id); //this matches it with _id, returns singular object
    if (!book) {
      return res.status(404).json({ error: `Book with id of ${id} not found` });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/books/title/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const book = await Book.findOne({ title: title }); //find the first with matching params
    if (!book) {
      return res.status(404).json({ error: `Book not found` });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST / CREATE
 */
//the post request uses form-encode as usual (don't provide ID as it's auto create)
router.post("/books", async (req, res) => {
  try {
    //construct a new Book object (params match the Book requirements)
    const book = new Book(req.body);
    //there are many ways to CREATE but the easiest one is:
    const savedBook = await book.save();
    //respond to notify success, can show them which book got saved
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT / UPDATE
 * (PUT: must supply all the objects) vs (PATCH: update only 1 small component)
 * but for mongoose findByIdAndUpdate, it will only patch it (so if you don't supply all then keep old data)
 */
//similar to POST but also needs the ID
router.put("/books/:id", async (req, res) => {
  const { id } = req.params;

  //there are many update methods, like findByIdAndUpdate() etc
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      //optional options param
      new: true, // makes it so it returns the updated book (by default returns the old book)
      runValidators: true, //makes sure the Book validation is checked again here
    });
    if (!updatedBook) {
      return res.status(404).json({ error: `Book not found` });
    }
    res.status(201).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE
 */
router.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  //just need ID for delete
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: `Book not found` });
    }
    res.status(200).json(deletedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
