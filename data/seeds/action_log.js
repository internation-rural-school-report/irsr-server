exports.seed = function(knex, Promise) {
  return knex('action_log')
    .truncate()
    .then(function () {
      return knex('action_log').insert([
        {
          description: 'Light bulb purchase',
          board_id: 1,
          issue_id: 1,
          status_id: 2
        },
        {
          description: 'Chairs ordered',
          board_id: 2,
          issue_id: 3,
          status_id: 2
        },
        {
          description: 'Cleaning supplies purchased',
          board_id: 1,
          issue_id: 4,
          status_id: 2
        }
      ]);
    });
};