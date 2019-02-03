exports.seed = function(knex, Promise) {
  return knex('school')
    .truncate()
    .then(function () {
      return knex('school').insert([
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
        },
        {
          name: 'Future Star High',
          code: 'AbDeDk',
          level_id: 3,
          country_id: 2
        },
        {
          name: 'Hope for Education',
          code: 'XxYyZz',
          level_id: 1,
          country_id: 1
        },
      ]);
    });
};