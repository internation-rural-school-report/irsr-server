const countryDb = require('../../data/helpers/countryDb');
const levelDb = require('../../data/helpers/levelDb');

module.exports = async (req, res, next) => {
  const { school } = req.body;

  if (
    !school
  ) {
    res.status(400).send('Missing required info');
  } else if (
    (school.name && typeof school.name !== 'string') ||
    (school.level_id && typeof school.level_id !== 'number') ||
    (school.country_id && typeof school.country_id !== 'number')
  ) {
    res.status(400).send('Invalid input type');
  } else {
    try {
      const country = await countryDb.get(school.country_id);
      const level = await levelDb.get(school.level_id);

      if (!country || !level) {
        res.status(400).send('Invalid school country or level id');
      } else {
        next();
      }

    } catch (err) {
      res.status(500).send('Cannot access database');
    }
  }
}