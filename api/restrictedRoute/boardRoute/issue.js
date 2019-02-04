const express = require("express");

const issueDb = require('../../../data/helpers/issueDb');
const validateInput = require('../../middleware/validateIssue');
const validateUpdate = require('../../middleware/validateIssueUpdate');

const router = express.Router();

router
  .get("/", async (req, res) => {
    const { board } = req;

    try {
      const issues = await issueDb.getByBoard(board.id);
      res.status(200).json(issues);
    } catch (err) {
      res.status(500).send('Failed to update school');
    }
  })

module.exports = router;