const { Router } = require('express')
const controllers = require('../controllers/books')

const router = Router()

router.get('/books', controllers.getBooks)
router.get('/books/:id', controllers.getBook)
router.post('/books', controllers.createBook)
router.put('/books/:id', controllers.updateBook)
router.delete('/books/:id', controllers.deleteBook)

module.exports = router