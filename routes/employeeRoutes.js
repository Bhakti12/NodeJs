const express = require('express');
const getEmployeeController = require('../controllers/getEmployeeController');
const UpdateEmployeeController = require('../controllers/UpdateEmployeeController');
const DeleteEmployeeController = require('../controllers/DeleteEmployeeController');
const addValidation = require("../Validations/userValidation");
const addEmployee = require("../controllers/AddEmployeeController");
const AuthController = require('../controllers/AuthController');
const router = express.Router();

router.get('/', addEmployee.getAddEmployee);

router.get('/employee', getEmployeeController.getEmployee);

router.post('/add-employee', addValidation.EmployeeValidation,addEmployee.AddEmployee);

router.get('/EditEmployee/:empId', getEmployeeController.getEmployeeById);

router.post('/EditEmployee', addValidation.EmployeeValidation,UpdateEmployeeController.UpdateEmployee);

router.get('/delete-employee/:empId', DeleteEmployeeController.getEmployeeById);

router.post('/delete-employee',DeleteEmployeeController.DeleteEmployeebyId);

router.post('/Login',AuthController.Login);

router.post('/Logout',AuthController.Logout);

module.exports = router;