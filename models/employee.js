const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const phone = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

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
        },
        validate:{
            isEmail: {
                msg: "wrong format email"
              },
              notEmpty: {
                msg: 'Email not null'
              }
        }
    },
    phoneNumber:{
        type:Sequelize.NUMBER,
        allowNull:false,
        validate:{
            isPhoneNumber: function(v){
                return phone.test(v);
            },
            notEmpty:{
                msg:'phoneNumber not empty'
            }
        }
    }
});

module.exports = employee;