exports.seed = function(knex, Promise) {
  return knex('school_level')
    .truncate()
    .then(function () {
      return knex('school_level').insert([
        {name: 'Elementary School'},
        {name: 'Middle School'},
        {name: 'High School'}
      ]);
    });
};
