const bcrypt = require("bcryptjs");

const dummyPass = 'password';
const hashedPass = bcrypt.hashSync(dummyPass, 12);

exports.seed = function(knex, Promise) {
  return knex('admin')
    .truncate()
    .then(function () {
      return knex('admin').insert([
        {
          username: 'mmbah',
          email: 'mmbah@gmail.com',
          password: hashedPass,
          school_id: 1
        },
        {
          username: 'jnykita',
          email: 'jnykita@gmail.com',
          password: hashedPass,
          school_id: 1
        },
        {
          username: 'ttsana',
          email: 'ttsana@gmail.com',
          password: hashedPass,
          school_id: 2
        },
        {
          username: 'butan',
          email: 'butan@gmail.com',
          password: hashedPass,
          school_id: 3
        },
        {
          username: 'siaman',
          email: 'siaman@gmail.com',
          password: hashedPass,
          school_id: 3
        },
        {
          username: 'mkey',
          email: 'mkey@gmail.com',
          password: hashedPass,
          school_id: 4
        }
      ]);
    });
};