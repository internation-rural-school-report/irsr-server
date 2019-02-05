exports.up = function(knex, Promise) {
  return knex.schema.createTable('board', t => {
    t.increments();  // primary key

    t.string('username', 255).notNullable().unique();
    t.string('firstname', 255).notNullable();
    t.string('lastname', 255).notNullable();
    t.string('email', 255).notNullable();
    t.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('board');
};
