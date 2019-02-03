const express = require('express');

const db = require('../../../data/helpers/schoolDb');

const router = express.Router();
router
  .get('/', async(req, res) => {
    try {
      const schools = await db.get();
      res.status(200).json(schools);
    } catch (err) {
      res.sendStatus(500);
    }
  })

module.exports = router;