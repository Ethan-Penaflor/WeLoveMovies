const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://welovemovies_9e00_user:h3HPk0opu3HQy7TVLk7AqS0IYy1Ndr4s@dpg-cqca1tt6l47c73d09u3g-a.oregon-postgres.render.com/welovemovies_9e00",
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
