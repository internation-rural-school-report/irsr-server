exports.seed = function(knex, Promise) {
  return knex('country')
    .truncate()
    .then(function () {
      return knex('country').insert([
        {name: 'Ghana'},
        {name: 'Ethiopia'},
        {name: 'Guinea'}
      ]);
    });
};