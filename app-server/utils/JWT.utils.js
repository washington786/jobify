const jwt = require("jsonwebtoken");
require("dotenv").config();

function signInJWT(id) {
  return jwt.sign({ id: id }, `${process.env.JWT_SECRET}`, {
    expiresIn: Math.floor(60 * 60 * 24 * 365),
  });
}

module.exports = signInJWT;
