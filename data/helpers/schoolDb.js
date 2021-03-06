const db = require('../config/dbConfig');

module.exports = {
  get: function (id, code = false) {
    let query = db('school')
    .select(
      'school.id',
      'school.name as school',
      'school_level.name as level',
      'country.name as country'
      )
      .join('school_level', 'school.level_id', 'school_level.id')
      .join('country', 'school.country_id', 'country.id')
      
    if (id) {
      query.where('school.id', id).first();
    }

    if (code) {
      query.select('school.code');
    }

    return query;
  },
  getByBoard: (id, code = false) => {
    let query = db('school')
    .select(
      'school.id',
      'school.name as school',
      'school_level.name as level',
      'country.name as country'
      )
      .join('school_level', 'school.level_id', 'school_level.id')
      .join('country', 'school.country_id', 'country.id')
      .join('school_board', 'school_board.school_id', 'school.id')
      .where('school_board.board_id', id)

      if (code) {
        query.select('school.code');
      }

    return query;
  },
  insert: school => db('school').insert(school),
  update: (school, id) => db('school').where('id', id).update(school),
  addBoard: (board_id, school_id) => db('school_board').insert({board_id, school_id})
}