module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/irsr.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) =>
       conn.run('PRAGMA foreign_keys = ON', cb)
      },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
