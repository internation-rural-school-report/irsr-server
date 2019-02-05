const express = require("express");

const db = require('../../../data/helpers/schoolDb');
const userDb = require('../../../data/helpers/userDb');
const { decodeToken } = require('../../token/token');
const validateSchoolUpdate = require('../../middleware/validateSchoolUpdate');

const router = express.Router();

router
  .get("/", async (req, res) => {
    const token = req.headers.authorization;
    const payload = decodeToken(token);

    try {
      const user = await userDb.getUserById(payload.id);
      const school = await db.get(user.school_id, true);
      res.status(200).json(school);
    } catch (err) {
      res.status(500).send('Failed to update school');
    }
  })
  .put("/", validateSchoolUpdate, async (req, res) => {
    const { school } = req.body;
    const token = req.headers.authorization;
    const payload = decodeToken(token);

    try {
      const user = await userDb.getUserById(payload.id);
      await db.update(school, user.school_id);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send('Failed to update account');
    }
  })

module.exports = router;