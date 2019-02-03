const express = require('express');

const admin = require('./adminRoute');
const board = require('./boardRoute');

const router = express.Router();

router.use('/admin', admin);
router.use('/board', board);

module.exports = router;