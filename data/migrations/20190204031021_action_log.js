exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_log', t => {
    t.increments();  // primary key

    t.timestamp('created_at').defaultTo(knex.fn.now());

    t.string('description', 255);

    t.integer('board_id')
      .unsigned()
      .notNullable();

    t.integer('issue_id')
      .unsigned()
      .notNullable();

    t.integer('status_id')
      .unsigned()
      .notNullable();

    // foreign keys
    t.foreign('board_id')
      .references('id')
      .inTable('board');

    t.foreign('issue_id')
      .references('id')
      .inTable('issue')
      .onDelete('CASCADE');

    t.foreign('status_id')
      .references('id')
      .inTable('issue_status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_log');
};
