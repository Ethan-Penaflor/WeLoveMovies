const path = require("path");

require("dotenv").config();

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DATABASE_URL // This is optional, used for local development
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      ssl: {
        rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
      }
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL, // Use DATABASE_URL for production environment
      ssl: {
        rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
      }
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
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
