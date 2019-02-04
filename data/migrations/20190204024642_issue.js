exports.up = function(knex, Promise) {
  return knex.schema.createTable('issue', t => {
    t.increments();  // primary key

    t.timestamp('created_at').defaultTo(knex.fn.now());

    t.string('photo_url', 255);

    t.string('description', 255);

    t.integer('cost')
      .unsigned()
      .notNullable();

    t.integer('admin_id')
      .unsigned()
      .notNullable();

    t.integer('type_id')
      .unsigned()
      .notNullable();

    t.integer('status_id')
      .unsigned()
      .notNullable();

    // foreign keys
    t.foreign('admin_id')
      .references('id')
      .inTable('admin');

    t.foreign('type_id')
      .references('id')
      .inTable('issue_type');

    t.foreign('status_id')
      .references('id')
      .inTable('issue_status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('issue');
};
