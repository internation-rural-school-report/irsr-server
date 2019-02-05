
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', t => {
    t.increments();  // primary key

    t.string('username', 255).notNullable().unique();
    t.string('firstname', 255).notNullable();
    t.string('lastname', 255).notNullable();
    t.string('email', 255).notNullable();
    t.string('password', 255).notNullable();
    t.integer('school_id')
      .unsigned()
      .notNullable();

    // foreign keys
    t.foreign('school_id')
      .references('id')
      .inTable('school');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin');
};
