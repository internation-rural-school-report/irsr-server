const express = require('express');

const schoolRoute = require('./schoolRoute/schoolRoute');
const adminRoute = require('./adminRoute');

const route = express.Router();

route.use('/schools', schoolRoute);
route.use('/admins', adminRoute);

module.exports = route;