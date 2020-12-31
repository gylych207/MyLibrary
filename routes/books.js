const { Router } = require('express')
const BookControllers = require('../controllers/books');
const UserControllers = require('../controllers/users')

const router = Router()

router.get('/books', BookControllers.getBooks)
router.get('/books/:id', BookControllers.getBook)
router.post('/books', BookControllers.createBook)
router.put('/books/:id', BookControllers.updateBook)
router.delete('/books/:id', BookControllers.deleteBook)

router.post('/user', UserControllers.userRegister);
router.get('/userLogin', UserControllers.userLogin);
router.get('/currentUser',UserControllers.getLoggedUser)



module.exports = router