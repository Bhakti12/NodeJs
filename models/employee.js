const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const employee = sequelize.define('employee',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    emailId:{
        type:Sequelize.STRING,
        unique:true
    },
    phoneNumber:Sequelize.INTEGER
});

module.exports = employee;