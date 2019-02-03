const db = require('../config/dbConfig');

module.exports = {
  get: (id) => {
    let query = db('school_level');

    if (id) {
      query.where('id', id).first();
    }

    return query;
  }
}