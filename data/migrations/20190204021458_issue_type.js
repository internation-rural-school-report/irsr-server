
exports.up = function(knex, Promise) {
  return knex.schema.createTable('issue_type', t => {
    t.increments();  // primary key

    t.string('name', 255).notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('issue_type');
};
