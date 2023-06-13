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
        allowNull:false,
        unique:{
            message:'Already used'
        }
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    token:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = employee;