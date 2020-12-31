const Books = require('../models/book');
const db = require('../db/connection');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getBooks = async () => {
  try {
    const books = await Books.find();
    res.json(books)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

const createBook = async () => {
  try {
    const createdBook = new Books(req.body);
    await createdBook.save();
    res.status(201).json(createdBook)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}