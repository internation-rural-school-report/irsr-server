const express = require("express");
const bcrypt = require("bcryptjs");

const validate = require('../../middleware/validateUpdate');
const db = require('../../../data/helpers/userDb');

const router = express.Router();

router.put("/", validate, async (req, res) => {
  const { newUser, username, password } = req.body;

  try {
    const matchUser = await db.getUserByName(username, 'board');

    if (
      matchUser &&
      bcrypt.compareSync(password, matchUser.password)
    ) {
      if (newUser.password) {
        newUser.password = bcrypt.hashSync(newUser.password, 12);
      }
      await db.update(matchUser.id, newUser, 'board');
      res.sendStatus(204);
    } else {
      res.status(400).send('Invalid username or password');
    }
  } catch (err) {
    res.status(500).send('Failed to login into account');
  }
});

module.exports = router;