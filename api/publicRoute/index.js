const express = require('express');

const schoolRoute = require('./schoolRoute/schoolRoute');
const adminRoute = require('./adminRoute');
const boardRoute = require('./boardRoute');

const router = express.Router();

router.use('/schools', schoolRoute);
router.use('/admins', adminRoute);
router.use('/boards', boardRoute);

module.exports = router;