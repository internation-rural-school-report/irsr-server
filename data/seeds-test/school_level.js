const school_levels = [
  { name: 'Elementary School' },
  { name: 'Middle School' },
  { name: 'High School' }
];

exports.school_levels = school_levels;
exports.seed = function (knex, Promise) {
  return knex('school_level')
    .truncate()
    .then(function () {
      return knex('school_level').insert(school_levels);
    });
};
