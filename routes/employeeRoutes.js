const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

router.get('/', employeeController.getAddEmployee);

router.get('/employee', employeeController.getEmployee);

router.post('/add-employee', employeeController.postAddEmployee);

router.get('/EditEmployee/:empId', employeeController.getEditEmployee);

router.post('/EditEmployee', employeeController.postEditEmployee);

router.post('/delete-employee', employeeController.postDeleteEmployee);

module.exports = router;