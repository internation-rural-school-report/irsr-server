const db = require('../config/dbConfig');

module.exports = {
  register: function(board) {
    return db('board').insert(board);
  },
  getBoardByName: function (name) {
    return db('board').where('username', name).first();
  }
}