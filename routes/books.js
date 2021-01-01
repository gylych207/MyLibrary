const { Router } = require("express");
const BookControllers = require("../controllers/books");
const UserControllers = require("../controllers/users");
const UserAuth = require('../controllers/auth')
const { check, validationResult } = require("express-validator");
const auth = require('../middleWare/auth');

const router = Router();

router.get("/books", BookControllers.getBooks);
router.get("/books/:id", BookControllers.getBook);
router.post("/books", BookControllers.createBook);
router.put("/books/:id", BookControllers.updateBook);
router.delete("/books/:id", BookControllers.deleteBook);

router.post(
  "/user",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Please Include a valid Email").isEmail(),
    check("password", "Please Enter a password with 6 or more digits").isLength(
      {
        min: 6,
      }
    ),
  ],
  UserControllers.userRegister
);
router.post("/userLogin", [
  check('email', 'Please Prowide a valid email').isEmail(),
  check('password','Password is Required').exists()
],UserAuth.userLogin);

router.get("/currentUser",auth, UserAuth.getLoggedUser);

module.exports = router;
