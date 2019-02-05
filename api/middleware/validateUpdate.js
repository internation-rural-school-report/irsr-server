module.exports = (req, res, next) => {
  const { newUser, username, password } = req.body;

  if (
    !newUser || !username || !password
  ) {
    res.status(400).send('Missing required info');
  } else if (
    (newUser.username && typeof newUser.username !== 'string') ||
    (newUser.firstname && typeof newUser.firstname !== 'string') ||
    (newUser.lastname && typeof newUser.lastname !== 'string') ||
    (newUser.email && typeof newUser.email !== 'string') ||
    (newUser.password && typeof newUser.password !== 'string')
  ) {
    res.status(400).send('Invalid input type');
  } else {
    next();
  }
}