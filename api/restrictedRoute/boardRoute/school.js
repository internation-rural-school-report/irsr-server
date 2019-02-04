const express = require("express");

const db = require('../../../data/helpers/schoolDb');
const userDb = require('../../../data/helpers/userDb');
const { decodeToken } = require('../../token/token');

const router = express.Router();

router
  .get("/", async (req, res) => {
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

module.exports = router;