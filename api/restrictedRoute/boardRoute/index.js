const express = require('express');

const update = require('./update');
const school = require('./school');

const router = express.Router();

router.use('/', update);
router.use('/school', school);

module.exports = router;