// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/rolex.db" //name and path of database to be created
    },

    migrations: {
      directory: "./data/migrations" //name for the database file to use
    },

    seeds: {
      directory: "./data/seeds"
    }
  }
};
