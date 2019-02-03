const db = require('../config/dbConfig');

module.exports = {
  register: function(user, role='admin') {
    return db(role).insert(user);
  },
  getUserByName: function (username, role='admin') {
    return db(role).where('username', username).first();
  }
}