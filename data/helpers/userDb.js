const db = require('../config/dbConfig');

module.exports = {
  register: function(user, role) {
    return db(role).insert(user);
  },
  getUserByName: function (username, role) {
    return db(role).where('username', username).first();
  }
}