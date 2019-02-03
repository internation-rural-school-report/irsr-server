const express = require('express');

const update = require('./update');
const router = express.Router();

router.use('/', update);


module.exports = router;