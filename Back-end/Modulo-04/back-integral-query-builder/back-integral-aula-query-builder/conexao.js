const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgretrettin",
    database: "knexjs",
    port: 5433,
  },
});

module.exports = knex;
