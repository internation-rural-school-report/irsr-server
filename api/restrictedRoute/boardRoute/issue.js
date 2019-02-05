const express = require("express");

const issueDb = require('../../../data/helpers/issueDb');
const validate = require('../../middleware/validateAction');

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
  .post("/:id", validate, async (req, res) => {
    const { board } = req;
    const { id } = req.params;
    const { status_id, description } = req.body;

    try {
      await issueDb.createAction({
        status_id,
        description,
        issue_id: Number(id),
        board_id: board.id
      });
      await issueDb.update(Number(id), {
        status_id
      })
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send('Failed to create action')
    }
  })


module.exports = router;