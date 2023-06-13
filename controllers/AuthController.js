const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const config = require('dotenv');

exports.Login = (req,res,next) => {
    try{
        const { email,password } = req.body;
        const emp = Employee.findOne({email});
        const token = req.header(process.env.token_holder_key);
        if(emp && password===emp.password){
        const verified = jwt.verify(token,process.env.jwt_Secret_key);
        if(verified){
            res.status(200).json({message:'Login successfully!!',
            isAuthenticated : true});
            //isAuthenticated = true;
        }
        else{
            res.status(402).json({message : 'incorrect credentials'});
        }
        }
        else{
            res.status(403).json({message:'email not found'});
        }
    }
    catch(err){
        console.log(err);
    }
};

exports.Logout = (req,res,next) => {
    try{
        const { token } = req.body;
        const decoded = jwt.verify(token, process.env.jwt_Secret_key);
        const email = decoded.email;
        res.status(301).json({message : 'logged out sucessfully!!'});
    }
    catch(err){
        console.log(err);
    }
};