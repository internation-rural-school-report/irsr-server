const countries = [
  { name: 'Ghana' },
  { name: 'Ethiopia' },
  { name: 'Guinea' }
];

exports.countries = countries;
exports.seed = function (knex, Promise) {
  return knex('country')
    .truncate()
    .then(function () {
      return knex('country').insert(countries);
    });
};