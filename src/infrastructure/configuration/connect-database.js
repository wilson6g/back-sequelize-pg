const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USERNAME;
const dbHost = process.env.DATABASE_HOST;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbPort = 5432;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "postgres"
});

module.exports = sequelize;


