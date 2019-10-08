// Update with your config settings.

module.exports = {
  development: {
    // client -> db driver
    client: "sqlite3",
    connection: {
      filename: "./data/produce.db3", //update
    },
    // sqlite requires
    useNullAsDefault: true, //add this
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  // defining the required configuration
  // that knex needs to connect to production
  production: {
    client: "pg", //changed and installed pg
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
