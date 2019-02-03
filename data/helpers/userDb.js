const db = require('../config/dbConfig');

module.exports = {
  register: function(user, role='admin') {
    return db(role).insert(user);
  },
  getUserByName: function (username, role='admin') {
    return db(role).where('username', username).first();
  },
  getAdminsBySchool: function (school_id) {
    return db('admin').where('school_id', school_id).select('firstname', 'lastname');
  },
  getBoardsBySchool: function (school_id) {
    return db('board')
      .select('board.firstname', 'board.lastname')
      .join('school_board', 'board.id', 'school_board.board_id')
      .where('school_board.school_id', school_id);
  }
}