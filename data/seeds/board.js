// TODO: hash password!!!
exports.seed = function(knex, Promise) {
  return knex('board')
    .truncate()
    .then(function () {
      return knex('board').insert([
        {
          username: 'bbob',
          email: 'bbob@gmail.com',
          password: 'pass'
        },
        {
          username: 'abcde',
          email: 'abcde@gmail.com',
          password: 'pass'
        },
        {
          username: 'gtkid',
          email: 'gtkid@gmail.com',
          password: 'pass'
        },
      ]);
    });
};