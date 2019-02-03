module.exports = (req, res, next) => {
  if (req.authorization !== 'board') {
    res.status(401).send('Unauthorized admin');
  } else {
    next();
  }
}