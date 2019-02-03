const express = require('express');

const register = require('./register');
const login = require('./login');

const route = express.Router();

route.use('/register', register);
route.use('/login', login);

module.exports = route;