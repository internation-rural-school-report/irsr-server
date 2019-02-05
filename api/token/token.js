require('dotenv').config();
const jwt = require("jsonwebtoken");

const secret = process.env;
const options = {
  expiresIn: "1h",
  jwtid: "12345" //jti
};

const generateToken = (objId, type) => jwt.sign(objId, secret[type], options);

const verifyToken = (token, type='ADMIN') =>
  jwt.verify(token, secret[type], (err, decoded) => {
    return !err;
  });

const decodeToken = token => jwt.decode(token);

module.exports = {
  generateToken,
  verifyToken,
  decodeToken
};
