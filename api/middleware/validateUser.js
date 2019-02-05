module.exports = (req, res, next) => {
  const { user } = req.body;

  if (
    !user ||
    !user.username ||
    !user.password
  ) {
    res.status(400).send('Missing required info');
  } else if (
    typeof user.username !== 'string' ||
    typeof user.password !== 'string'
  ) {
    res.status(400).send('Invalid input type');
  } else {
    next();
  }
}