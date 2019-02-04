const express = require("express");

const issueDb = require('../../../data/helpers/issueDb');
const validateInput = require('../../middleware/validateIssue');
const validateUpdate = require('../../middleware/validateIssueUpdate');

const router = express.Router();

router
  .param('id', async (req, res, next, id) => {
    const { admin } = req;

    try {
      const issues = await issueDb.getBySchool(admin.school_id);
      const issue = issues.find(issue => issue.id === Number(id));
      console.log(issues);
      if (!issue) {
        res.status(400).send('Cannot fetch issue');
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send('Cannot connect to Database')
    }
  })
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
  .put("/:id", validateUpdate, async (req, res) => {
    const { id } = req.params;
    const { cost, description, type_id, photo_url } = req.body.issue;

    try {
      await issueDb.update(id, {
        description,
        cost,
        type_id,
        photo_url
      });
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send('Failed to update issue');
    }
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      await issueDb.delete(id);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send('Failed to delete issue');
    }
  })

module.exports = router;