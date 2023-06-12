const Employee = require('../models/employee');

exports.AddEmployee = (firstName,lastName,emailId,phoneNumber,password,token) => {
    return Employee.create({firstName,lastName,emailId,phoneNumber,password,token});
};

exports.getEmployeebyId = (id) => {
    return Employee.findByPk(id);
};

exports.getEmployee = () => {
    return Employee.findAll();
};

exports.deleteEmployee = (id) => {
    return Employee.destroy({ where: { id } });
};

exports.getEMployee = (emailId) => {
    return Employee.findOne({ where: { emailId } });
};