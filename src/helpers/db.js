var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'toor',
    database : 'testing'
  }
});

module.exports = knex