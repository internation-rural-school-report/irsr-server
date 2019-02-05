const schoolDb = require('../../data/helpers/schoolDb');

module.exports = async (req, res, next) => {
  const { admin, code } = req.body;

  if (
    !admin ||
    !admin.username ||
    !admin.firstname ||
    !admin.lastname ||
    !admin.email ||
    !admin.password ||
    !admin.school_id ||
    !code
  ) {
    res.status(400).send('Missing required info');
  } else if (
    typeof admin.username !== 'string' ||
    typeof admin.firstname !== 'string' ||
    typeof admin.lastname !== 'string' ||
    typeof admin.email !== 'string' ||
    typeof admin.password !== 'string' ||
    typeof admin.school_id !== 'number' ||
    typeof code !== 'string'
  ) {
    res.status(400).send('Invalid input type');
  } else {
    try {
      const school = await schoolDb.get(admin.school_id, true);

      if (!school || school.code !== code) {
        res.status(400).send('Invalid school id or code');
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send('Cannot access database');
    }
  }
}