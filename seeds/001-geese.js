exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("geese")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("geese").insert([
        { name: "Ben Aflack", color: "white" },
        { name: "Goose Bumps", color: "white" },
        { name: "Tom Honks", color: "white" },
      ]);
    });
};
