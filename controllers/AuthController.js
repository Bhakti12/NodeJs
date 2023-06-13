const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');
const config = require('dotenv');
const bcrypt = require('bcrypt');
const message = require('../util/globalSuccessMesssage');

config.config();

const secretKey = process.env.JWT_SECRET_KEY;
const tokenKey = process.env.TOKEN_HOLDER_KEY;

exports.Login = async (req,res,next) => {
    try{
        const { emailId,password } = req.body;
        
        if(!(emailId && password)){
            res.status(message.error.Empty.status).json({message : message.error.Empty.message});
        }
        const emp = await Employee.findOne({emailId});
        const token = req.header(tokenKey);
        if(emp && (await bcrypt.compare(password,emp.password))){
        const verified = jwt.verify(token,secretKey);
        if(verified){
            res.status(200).json({message:'Login successfully!!',
            isAuthenticated : true});
            //isAuthenticated = true;
        }
        else{
            res.status(402).json({message : 'incorrect credentials!!'});
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