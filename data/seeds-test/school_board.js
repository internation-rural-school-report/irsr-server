const school_boards = [
  {
    school_id: 1,
    board_id: 1,
  },
  {
    school_id: 2,
    board_id: 1,
  }
];

exports.school_boards = school_boards;
exports.seed = function (knex, Promise) {
  return knex('school_board')
    .truncate()
    .then(function () {
      return knex('school_board').insert(school_boards);
    });
};