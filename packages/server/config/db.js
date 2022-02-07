require('dotenv/config');

module.exports = {
    development: {
      username: "postqres",
      password: "postgres",
      database: "dbproducts",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    test: {},
    production: {}
  }