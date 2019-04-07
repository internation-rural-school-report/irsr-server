const issue_status = [
  { name: 'Open' },
  { name: 'Resolved' },
  { name: 'Scheduled' },
  { name: 'Ignored' }
];

exports.issue_status = issue_status;
exports.seed = function (knex, Promise) {
  return knex('issue_status')
    .truncate()
    .then(function () {
      return knex('issue_status').insert(issue_status);
    });
};