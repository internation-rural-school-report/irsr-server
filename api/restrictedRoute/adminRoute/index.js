const express = require('express');

const getAdmin = require('../../middleware/getAdminFromToken');

const update = require('./update');
const school = require('./school');
const issues = require('./issue');

const router = express.Router();

router.use('/', update);
router.use('/school', school);
router.use('/issues', getAdmin, issues);

module.exports = router;