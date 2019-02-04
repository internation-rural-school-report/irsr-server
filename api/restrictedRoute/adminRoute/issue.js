const express = require("express");

const issueDb = require('../../../data/helpers/issueDb');
const validateInput = require('../../middleware/validateIssue');

const router = express.Router();

router
  .get("/", async (req, res) => {
    const { admin } = req;

    try {
      const issues = await issueDb.getBySchool(admin.school_id);
      res.status(200).json(issues);
    } catch (err) {
      res.status(500).send('Failed to update school');
    }
  })
  .post("/", validateInput, async (req, res) => {
    const { admin } = req;
    const { issue } = req.body;
    issue.admin_id = admin.id;
    issue.status_id = 1;
  
    try {
      const issueId = await issueDb.insert(issue);
      res.status(200).json({id: issueId[0]});
    } catch (err) {
      res.status(500).send('Failed to create issue');
    }
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const issueId = await issueDb.delete(1);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send('Failed to create issue');
    }
  })

module.exports = router;