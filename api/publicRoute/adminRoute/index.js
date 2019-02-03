const express = require('express');

const registerAdmin = require('./registerAdmin');
const loginAdmin = require('./loginAdmin');

const route = express.Router();

route.use('/register', registerAdmin);
route.use('/login', loginAdmin);

module.exports = route;