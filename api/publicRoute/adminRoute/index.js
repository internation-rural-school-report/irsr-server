const express = require('express');

const registerAdmin = require('./registerAdmin');

const route = express.Router();

route.use('/register', registerAdmin);

module.exports = route;