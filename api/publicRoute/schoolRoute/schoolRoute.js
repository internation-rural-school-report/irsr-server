const express = require('express');

const db = require('../../../data/helpers/schoolDb');
const validateSchool = require('../../middleware/validateSchool');

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
  .post('/', validateSchool, async (req, res) => {
    const { school } = req.body;
    const code = Date.now().toString().substring(9);
    school.code = code;
    try {
      const id = await db.insert(school);
      res.status(200).json({ id });
    } catch (err) {
      res.status(500).send('Failed to create new school');
    }
  })

module.exports = router;