const express = require("express");
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");


const getLoggedUser = async (req, res) => {
try {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);

} catch (error) {
  console.log(error.message);
  res.status(500).send('server error')
}
};

// POST users/auth
//Authorize user and get token
// public
const userLogin = async (req, res) => {
  // res.send('Log in a  User')
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error')
  }
};

// const express = require('express');
// const router = express.Router();

// // GET users/auth
// //get logged in User
// // Private
// const getLoggedUser = ('/', () => {
//   res.send('GET logged in User')
// })

// // POST users/auth
// //Authorize user and get token
// // public
// const logginUser = ('/', () => {
//   res.send('Log in a  User')
// })

module.exports = {
  getLoggedUser,
  userLogin,
};
