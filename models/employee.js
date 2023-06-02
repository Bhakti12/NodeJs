const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const employee = sequelize.define('employee',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    emailId:{
        type:Sequelize.STRING,
        unique:true
    },
    phoneNumber:{
        type:Sequelize.NUMBER
    }
});

module.exports = employee;