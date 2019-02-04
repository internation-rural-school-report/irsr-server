exports.seed = function(knex, Promise) {
  return knex('issue_status')
    .truncate()
    .then(function () {
      return knex('issue_status').insert([
        {name: 'Open'},
        {name: 'Resolved'},
        {name: 'Scheduled'},
        {name: 'Ignored'}
      ]);
    });
};