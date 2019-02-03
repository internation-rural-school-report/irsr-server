const db = require('../config/dbConfig');

module.exports = {
  register: function(admin) {
    return db('admin').insert(admin);
  },
  getAdminByName: function (name) {
    return db('admin').where('username', name).first();
  }
}