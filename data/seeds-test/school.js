const schools = [
  {
    name: 'Hope for Education Elementary School',
    code: 'XxYyZz',
    level_id: 1,
    country_id: 1
  },
  {
    name: 'Rekindled Middle School',
    code: 'ReTeUc',
    level_id: 2,
    country_id: 1
  }
];

exports.schools = schools;
exports.seed = function (knex, Promise) {
  return knex('school')
    .truncate()
    .then(function () {
      return knex('school').insert(schools);
    });
};