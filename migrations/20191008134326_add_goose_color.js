exports.up = function(knex) {
  return knex.schema.table("geese", tbl => {
    tbl.string("color", 32);
  });
};

exports.down = function(knex) {
  return knex.schema.table("geese", tbl => {
    tbl.dropColumn("color");
  });
};
