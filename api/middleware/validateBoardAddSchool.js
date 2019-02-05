const schoolDb = require('../../data/helpers/schoolDb');

module.exports = async (req, res, next) => {
  const { id, code } = req.body;

  if (
    !id || !code
  ) {
    res.status(400).send('Missing required info');
  } else if (
    typeof id !== 'number' ||
    typeof code !== 'string'
  ) {
    res.status(400).send('Invalid input type');
  } else {
    try {
      const school = await schoolDb.get(id, true);
      if (!school || school.code !== code) {
        res.status(400).send('Invalid school id or code');
      } else {
        next();
      }

    } catch (err) {
      res.status(500).send('Cannot fetch school info');
    }
  }
}