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