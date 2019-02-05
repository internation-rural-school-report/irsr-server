const express = require('express');

const admin = require('./adminRoute');
const board = require('./boardRoute');
const adminOnly = require('../middleware/adminOnly');
const boardOnly = require('../middleware/boardOnly');


const router = express.Router();

router.use('/admins', adminOnly, admin);
router.use('/boards', boardOnly, board);

module.exports = router;