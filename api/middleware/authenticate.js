const { verifyToken } = require('../token/token');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('Unauthorized user');
  } else if (verifyToken(token)) {
    req.authorization = 'admin',
    next();
  } else if (verifyToken(token, 'BOARD')) {
    req.authorization = 'board';
    next();
  } else {
    res.status(401).send('Invalid token');
  }
}