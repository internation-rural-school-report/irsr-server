const db = require('../../data/helpers/issueDb');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { status_id, description } = req.body;

  if (!status_id || !description) {
    res.status(400).send('Missing required info')
  } else if (
    (typeof status_id !== "number") ||
    typeof description !== 'string'
  ) {
    res.status(400).send('Invalid input type');
  } else {
    try {
      const issue = await db.get(Number(id));
      const statuses = await db.getStatuses();
      const validStatus = statuses.find(status => status.id === status_id);

      if (issue.status_id === 2) {
        res.status(400).send('Cannot take action on resolved issue')
      } else if (!validStatus) {
        res.status(400).send('Invalid status_id')
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send('Cannot access database');
    }

  }
}