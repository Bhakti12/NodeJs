const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_demo', 'root', '', {
  dialect:'mysql',
  host: 'localhost'
});

module.exports = sequelize;