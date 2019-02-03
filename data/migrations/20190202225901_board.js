
exports.up = function(knex, Promise) {
  return knex.schema.createTable('board', t => {
    t.increments();  // primary key

    t.string('username', 255).notNullable();
    t.string('email', 255).notNullable();
    t.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('board');
};
