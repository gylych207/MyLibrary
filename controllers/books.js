const Books = require('../models/book');
const db = require('../db/connection');
const { findByIdAndUpdate } = require('../models/book');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getBooks =  async (req,res) => {
  try {
    const books = await Books.find();
    res.json(books)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
  
}

const getBook =  async (req, res) => {
  try {
      const { id } = req.params
      const book = await Books.findById(id)
      if (book) {
          return res.json(book)
      }
      res.status(404).json({ message: 'Book not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
 
}

const createBook = async (req,res) => {
  try {
    const createdBook = new Books(req.body);
    await createdBook.save();
    res.status(201).json(createdBook)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

const updateBook = async (req, res) => {
  const { id } = req.params
  await Books.findByIdAndUpdate(id, req.body, { new: true }, (error, book) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!book) {
      return res.status(404).json({ message: 'Book not found!' })
    }
    res.status(200).json(book)
  })
}

const deleteBook = async (req, res) => {
  try {
      const { id } = req.params;
      const deletedBook = await Books.findByIdAndDelete(id)
      if (deletedBook) {
          return res.status(200).send("Book deleted")
      }
      throw new Error("Book not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
}