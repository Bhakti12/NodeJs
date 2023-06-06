const express = require('express');
const AddEmployeeController = require('../controllers/AddEmployeeController');
const getEmployeeController = require('../controllers/getEmployeeController');
const UpdateEmployeeController = require('../controllers/UpdateEmployeeController');
const DeleteEmployeeController = require('../controllers/DeleteEmployeeController');
const userValidation = require('../Validations/userValidation');
const router = express.Router();

router.get('/', AddEmployeeController.getAddEmployee);

router.get('/employee', getEmployeeController.getEmployee);

router.post('/add-employee', AddEmployeeController.AddEmployee,userValidation.EmployeeValidation);

router.get('/EditEmployee/:empId', getEmployeeController.getEmployeeById);

router.post('/EditEmployee', UpdateEmployeeController.UpdateEmployee,userValidation.EmployeeValidation);

router.post('/delete-employee', DeleteEmployeeController.DeleteEmployeebyId);

module.exports = router;