const express = require("express");
const bcrypt = require("bcryptjs");

const validateBoard = require('../../middleware/validateBoard');
const { generateToken } = require('../../token/token');
const db = require('../../../data/helpers/boardDb');

const router = express.Router();

router.post("/", validateBoard, async (req, res) => {
  const { board } = req.body;

  board.password = bcrypt.hashSync(board.password, 12);

  try {
    const boardId = await db.register(board);
    const token = generateToken({ id: boardId[0] });
    if (boardId.length) {
      res.status(201).json({ id: boardId[0], token });
    } else {
      res.status(500).send('Failed to register new board')
    }
  } catch (err) {
    res.status(500).send('Failed to create new board');
  }
});

module.exports = router;