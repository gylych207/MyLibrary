const db = require('../db/connection')
const Book = require('../models/book')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const books = [
    {
      "title": "The Origin of Life",
      "author": "Garry Li",
      "Publisher": "Harvard university",
      "category": "Science",
      "publishedYear": "1998",
      "imgURL":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3319/9781331947530.jpg"
    }
  ]
  await Book.insertMany(books);
  console.log('created Books')
}

const run = async () => {
  await main()
  db.close()
}

run()