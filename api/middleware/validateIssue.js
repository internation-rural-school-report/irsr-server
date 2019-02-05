const db = require('../../data/helpers/issueDb');

module.exports = async (req, res, next) => {
  const { issue } = req.body;

  if (
    !issue ||
    !issue.cost ||
    !issue.type_id
  ) {
    res.status(400).send('Missing required info');
  } else if (
    typeof issue.cost !== 'number' ||
    typeof issue.type_id !== 'number' ||
    (issue.photo_url && typeof issue.photo_url !== 'string') ||
    (issue.description && typeof issue.description !== 'string')
  ) {
    res.status(400).send('Invalid input type');
  } else {
    try {
      const types = await db.getIssueType();
      const type = types.find(type => type.id === issue.type_id);

      if (!type) {
        res.status(400).send('Invalid issue type');
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send('Cannot access database');
    }
  }
}