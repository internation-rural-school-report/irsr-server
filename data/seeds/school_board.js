exports.seed = function(knex, Promise) {
  return knex('school_board')
    .truncate()
    .then(function () {
      return knex('school_board').insert([
        {
          school_id: 1,
          board_id: 1,
        },
        {
          school_id: 2,
          board_id: 1,
        },
        {
          school_id: 1,
          board_id: 2,
        },
        {
          school_id: 2,
          board_id: 2,
        },
        {
          school_id: 3,
          board_id: 2,
        },
        {
          school_id: 4,
          board_id: 3,
        },
        {
          school_id: 1,
          board_id: 3,
        },
        {
          school_id: 2,
          board_id: 3,
        },

      ]);
    });
};