const { Router } = require("express");
const BookControllers = require("../controllers/books");
const UserControllers = require("../controllers/users");
const { check, validationResult } = require("express-validator");

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
router.get("/userLogin", UserControllers.userLogin);
router.get("/currentUser", UserControllers.getLoggedUser);

module.exports = router;
