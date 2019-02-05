const express = require('express');

const getBoard = require('../../middleware/getBoardFromToken');

const update = require('./update');
const school = require('./school');
const issues = require('./issue');

const router = express.Router();

router.use('/', update);
router.use('/school', school);
router.use('/issues', getBoard, issues);

module.exports = router;