const express = require("express");
const bcrypt = require("bcryptjs");

const validateUser = require('../../middleware/validateUser');
const { generateToken } = require('../../token/token');
const db = require('../../../data/helpers/boardDb');

const router = express.Router();

router.post("/", validateUser, async (req, res) => {
  const { user } = req.body;

  try {
    const matchUser = await db.getBoardByName(user.username);

    if (
      matchUser &&
      bcrypt.compareSync(user.password, matchUser.password)
    ) {
      const token = generateToken({ id: matchUser.id }, 'BOARD');
      res.status(200).json({ token });
    } else {
      res.status(400).send('Invalid username or password');
    }
  } catch (err) {
    res.status(500).send('Failed to login into account');
  }
});

module.exports = router;