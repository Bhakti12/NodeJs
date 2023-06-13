const Message = require('../util/globalSuccessMesssage');
const { AddEmployee , getEMployee } = require('../services/query');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

console.log("coming in this");

exports.getAddEmployee = (req,res,next) => {
    res.render('EditEmployee', {
        path: '/',
        editing: false
    });
};

exports.AddEmployee = async (req,res,next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailId = req.body.emailId;
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password.toString();
  
  console.log(firstName,lastName,emailId,phoneNumber,password);
  //console.log(body(firstName));

  // const errors = validationResult(req);
  // //console.log(errors);
  // if(!errors.isEmpty()){
  //   //console.log(errors.array());
  //   return res.status(400).json({errors:errors.array()});
  // }

  getEMployee(emailId)
    console.log(firstName,lastName,emailId,phoneNumber,password);
    try{
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(JSON.stringify(password),salt);
      const token = jwt.sign(
        { emp_id: emailId , password: hashPassword },
        secretKey,{
          expiresIn : "3000m",
        }
      )
      const emp_token = token;
      if(token){
        AddEmployee(firstName,lastName,emailId,phoneNumber,hashPassword,emp_token).then(
          result=>{
            res.status(Message.employee.created.status).json({message : Message.employee.created.message});
          }
        )
      }
      else{
        res.status(Message.error.notAdded.status).json({message : Message.error.notAdded.message});
      }
    }
    catch(err){
      console.log(err);
    }
};