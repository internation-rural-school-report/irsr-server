const bcrypt = require("bcryptjs");

const dummyPass = 'password';
const hashedPass = bcrypt.hashSync(dummyPass, 12);

exports.seed = function(knex, Promise) {
  return knex('board')
    .truncate()
    .then(function () {
      return knex('board').insert([
        {
          username: 'bbob',
          email: 'bbob@gmail.com',
          password: hashedPass
        },
        {
          username: 'abcde',
          email: 'abcde@gmail.com',
          password: hashedPass
        },
        {
          username: 'gtkid',
          email: 'gtkid@gmail.com',
          password: hashedPass
        },
      ]);
    });
};