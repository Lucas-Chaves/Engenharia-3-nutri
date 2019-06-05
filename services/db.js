const mysql = require('mysql');
const { 
  MYSQL_DBNAME: database, MYSQL_PORT: port, MYSQL_HOST: host, MYSQL_PASSWORD: password, MYSQL_USERNAME: user 
} = require('../configuration');
const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
  port
});

connection.connect(err => {
  if (err) console.error(err);
  console.log('tudo ok');
})

module.exports = connection;