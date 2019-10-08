// changes to make on the db schema
exports.up = function(knex) {
  return knex.schema.createTable("geese", function(tbl) {
    // a Primary Key, named 'id' that is an integer and
    // auto-increments
    tbl.increments();
    tbl.string("name", 128).notNullable();
  });
};

// how to undo the changes made to the db schema
// manual undo
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("geese");
};
