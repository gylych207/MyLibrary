const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req,res,next) {
  // Get token from the header
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({message:'Not Token. Authorization Denied'})
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({message:'token is not valid'})
  }
}