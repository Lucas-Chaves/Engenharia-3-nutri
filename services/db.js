const Sequelize = require('sequelize');
const { 
  MYSQL_DBNAME, MYSQL_PORT, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USERNAME 
} = require('../configuration')
const sequelize = new Sequelize(MYSQL_DBNAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
  port: MYSQL_PORT
});

module.exports = { sequelize, Sequelize };