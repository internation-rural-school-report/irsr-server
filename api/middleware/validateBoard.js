const schoolDb = require('../../data/helpers/schoolDb');

module.exports = (req, res, next) => {
  const { board } = req.body;

  if (
    !board ||
    !board.username ||
    !board.email ||
    !board.password 
  ) {
    res.status(400).send('Missing required info');
  } else if (
    typeof board.username !== 'string' ||
    typeof board.email !== 'string' ||
    typeof board.password !== 'string'
  ) {
    res.status(400).send('Invalid input type');
  } else {
    next();
  }
}