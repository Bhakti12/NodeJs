const sequelize = require('sequelize');

const Sequelize = new sequelize('employee_management','root','',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = Sequelize;