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
        },
        {
          username: 'ttsana',
          firstname: 'Terry',
          lastname: 'Tsana',
          email: 'ttsana@gmail.com',
          password: hashedPass,
          school_id: 2
        },
        {
          username: 'butan',
          firstname: 'Benny',
          lastname: 'Utan',
          email: 'butan@gmail.com',
          password: hashedPass,
          school_id: 3
        },
        {
          username: 'siaman',
          firstname: 'Sam',
          lastname: 'Iaman',
          email: 'siaman@gmail.com',
          password: hashedPass,
          school_id: 3
        },
        {
          username: 'mkey',
          firstname: 'Michael',
          lastname: 'Key',
          email: 'mkey@gmail.com',
          password: hashedPass,
          school_id: 4
        }
      ]);
    });
};