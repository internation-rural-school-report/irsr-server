const userDb = require('../../data/helpers/userDb');
const { decodeToken } = require('../token/token');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = decodeToken(token);

  try {
    const user = await userDb.getUserById(payload.id);
    req.admin = user;
    next();
  } catch (err) {
    res.status(500).send('Failed to update school');
  }
}