const express = require('express');
//const readline = require('readline');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const Emproutes = require('./routes/employeeRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(Emproutes);

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function getUserInput(que){
//     return new Promise((resolve)=>{
//         r1.question(que, answer=>{
//             resolve(answer);
//         });
//     });
// }

// function ShowMenu(){
//     console.log('1. Add employee');
//     console.log('2. get employees');
//     console.log('3. get employee');
//     console.log('4. Update employee');
//     console.log('5.delete employee');

//     getUserInput('enter your choice').then(choice=>HandleChoices(choice));
// }

// function HandleChoices(choice){
//     switch(choice){
//         case '1':
//             CreateEmployee();
//         case '2':
//             GetEmployee();
//         case '3':
//             GetEmployees();
//         case '4':
//             UpdateEmployee();
//         case '5':
//             DeleteEmployee();
//         default:
//             console.log('Invalid choice');
//     }
// }

// function CreateEmployee(){
//     const firstName = getUserInput('Enter First Name');
//     const lastName = getUserInput('enter last name');
//     const emailId = getUserInput('enter email');
//     const phoneNumber = getUserInput('enter phone');
//     const newEmployee = employeeController.AddEmployee({firstName,lastName,emailId,phoneNumber});
//     console.log('employee created');
//     console.log(`${newEmployee.firstName}`,`${newEmployee.lastName}`,`${newEmployee.emailId}`,`${newEmployee.phoneNumber}`); 
//     ShowMenu();
// }

// function GetEmployee(){
//     const firstName = getUserInput('enter first name : ');
//     const selectedEmployee = employeeController.getEmployee();
    
// }

// function GetEmployees(){
//     const AllEmployees = employeeController.getEmployees();
// }

// function UpdateEmployee(){
//     const updateEmp = employeeController.updateEmployee();
// }

// function DeleteEmployee(){
//     const deleteEmp = employeeController.deleteEmployee();
// }

// function exitMenu(){
//     r1.close();
//     process.exit();
// }

// ShowMenu();

sequelize.sync().then(console.log('connected successfully!!!')).catch(err=>console.log(err));

app.listen(3000);