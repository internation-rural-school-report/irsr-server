const express = require("express");

const db = require('../../../data/helpers/schoolDb');
const userDb = require('../../../data/helpers/userDb');
const { decodeToken } = require('../../token/token');
const validate = require('../../middleware/validateBoardAddSchool');

const router = express.Router();

router
  .get('/', async (req, res) => {
    const token = req.headers.authorization;
    const payload = decodeToken(token);

    try {
      const user = await userDb.getUserById(payload.id, 'board');
      const schools = await db.getByBoard(user.id);
      res.status(200).json(schools);
    } catch (err) {
      res.status(500).send('Failed to update school');
    }
  })
  .post('/', validate, async (req, res) => {
    const { id } = req.body;
    const token = req.headers.authorization;
    const payload = decodeToken(token);

    try {
      const schools = await db.getByBoard(payload.id);
      const duplicate = schools.find(school => school.id === id);

      if (duplicate) {
        res.status(400).send('Already a Board of the school');
      } else {
        await db.addBoard(payload.id, id);
        res.sendStatus(204);
      }
    } catch (err) {
      res.status(500).send('Failed to update school');
    }
  })

module.exports = router;