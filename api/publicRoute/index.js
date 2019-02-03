const express = require('express');

const schoolRoute = require('./schoolRoute/schoolRoute');

const route = express.Router();

route.use('/', schoolRoute);

module.exports = route;