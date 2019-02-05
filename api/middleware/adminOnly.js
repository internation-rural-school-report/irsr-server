module.exports = (req, res, next) => {
  if (req.authorization !== 'admin') {
    res.status(401).send('Unauthorized admin');
  } else {
    next();
  }
}