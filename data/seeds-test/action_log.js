const actions = [
  {
    description: 'Light bulb purchase',
    board_id: 1,
    issue_id: 1,
    status_id: 2
  }
];

exports.actions = actions;
exports.seed = function (knex, Promise) {
  return knex('action_log')
    .truncate()
    .then(function () {
      return knex('action_log').insert(actions);
    });
};