const issues = [
  {
    description: 'Light bulb replacement',
    cost: 1000,
    admin_id: 1,
    type_id: 2,
    status_id: 2
  },
  {
    description: 'Crayons',
    cost: 1500,
    admin_id: 2,
    type_id: 5,
    status_id: 1
  }
];

exports.issues = issues;
exports.seed = function (knex, Promise) {
  return knex('issue')
    .truncate()
    .then(function () {
      return knex('issue').insert(issues);
    });
};