
exports.up = function(knex, Promise) {
  return knex.schema.createTable('school', t => {
    t.increments();  // primary key

    t.string('name', 255).notNullable();
    t.string('code', 10).notNullable();
    t.integer('level_id')
      .unsigned()
      .notNullable();
    t.integer('country_id')
      .unsigned()
      .notNullable();

    // foreign keys
    t.foreign('level_id')
      .references('id')
      .inTable('school_level');
    t.foreign('country_id')
      .references('id')
      .inTable('country');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('school');
};
