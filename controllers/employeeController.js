const sequelize = require('../util/database');
const Employee = require('../models/employee');

exports.AddEmployee = (req,res,next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    
};

exports.getEmployee = (req,res,next) => {

};

exports.getEmployees = (req,res,next) => {

};

exports.updateEmployee = (req,res,next) => {

};

exports.deleteEmployee = (req,res,next) => {

};