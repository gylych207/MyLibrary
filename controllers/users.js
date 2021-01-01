const express = require('express');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');


// POST library/users
//Register a user
// Public
const userRegister = async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()})
  }
  // Validation
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({message:'User Alrady Exists'})
    }
    user = new User({
      name,
      email,
      password
    })
    // For now, it is not saved to database. Before That we need to hash the password
    const salt = await bcrypt.salt
  } catch (error) {
    
  }
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