
exports.up = function(knex, Promise) {
  return knex.schema.createTable('school_board', t => {
    t.integer('school_id')
      .unsigned()
      .notNullable();
    t.integer('board_id')
      .unsigned()
      .notNullable();

    // foreign keys
    t.foreign('school_id')
      .references('id')
      .inTable('school');
    t.foreign('board_id')
      .references('id')
      .inTable('board');

    // primary keys
    t.primary(['school_id', 'board_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('school_board');
};
