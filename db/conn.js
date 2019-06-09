const Sequelize = require('sequelize');
//const conn = new Sequelize("postgres://localhost:5432/chat_app_db");

const conn = new Sequelize('chat_app_db', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = conn;