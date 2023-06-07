const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const phone = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

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
            isEmailPattern:function(v){
                if(!email.test(v)){
                    throw new Error('Wrong format of email');
                }
            },
            isEmail: {
                msg: "wrong format email"
              },
              notEmpty: {
                msg: 'Email not null'
              }
        }
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isPhoneNumber: function(v){
                if(!phone.test(v)){
                    throw new Error('Phone number must be of 10 digits with country code');
                }
            },
            notEmpty:{
                msg:'phoneNumber not empty'
            }
        }
    }
});

module.exports = employee;