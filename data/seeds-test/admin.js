const bcrypt = require("bcryptjs");

const dummyPass = 'password';
const hashedPass = bcrypt.hashSync(dummyPass, 12);

const admins = [
  {
    username: 'mmbah',
    firstname: 'Michael',
    lastname: 'Mbah',
    email: 'mmbah@gmail.com',
    password: hashedPass,
    school_id: 1
  },
  {
    username: 'jnykita',
    firstname: 'Jenny',
    lastname: 'Nykita',
    email: 'jnykita@gmail.com',
    password: hashedPass,
    school_id: 1
  }
];

exports.admins = admins;
exports.seed = function(knex, Promise) {
  return knex('admin')
    .truncate()
    .then(function () {
      return knex('admin').insert(admins);
    });
};