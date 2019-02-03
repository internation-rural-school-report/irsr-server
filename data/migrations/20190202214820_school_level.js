
exports.up = function(knex, Promise) {
  return knex.schema.createTable('school_level', t => {
    t.increments();  // primary key

    t.string('name', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('school_level');
};
