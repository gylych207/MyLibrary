const express = require('express');
const router = express.Router();

// POST library/users
//Register a user
// Public
const userRegister = (req,res) => {
  res.send('Register a user')
}

const getLoggedUser = ('/', () => {
  res.send('GET logged in User')
})

// POST users/auth
//Authorize user and get token
// public
const userLogin = ('/', () => {
  res.send('Log in a  User')
})


module.exports = {
  userRegister,
  getLoggedUser,
  userLogin
};