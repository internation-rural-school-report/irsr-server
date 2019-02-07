const issue_types = [
  { name: 'Security' },
  { name: 'Electrical' },
  { name: 'Furniture' },
  { name: 'Text Books' },
  { name: 'General School Supplies' },
  { name: 'Tech Equipment' },
  { name: 'Others' }
];

exports.issue_types = issue_types;
exports.seed = function (knex, Promise) {
  return knex('issue_type')
    .truncate()
    .then(function () {
      return knex('issue_type').insert(issue_types);
    });
};
