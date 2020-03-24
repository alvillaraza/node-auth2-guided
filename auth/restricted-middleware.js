const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'silly'

module.exports = (req, res, next) => {
  // expects token in the Request Authorization header
  // what value token? if no Authorization header in HTTP request?
  const token = req.headers.authorization

  if (token) {
    // check whether still valid, payload not tampered with, hasn't expired etc etc
  } else {
    // if no token at all
    res.status(400).json({ message: 'Emmm, you need a token' });
  }
}
