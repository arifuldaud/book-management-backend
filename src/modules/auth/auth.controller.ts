import { RequestHandler } from "express";
import bcrypt from "bcryptjs"
import { passwordHelpers } from "../../utils/passwordHepler";
import { pool } from "../../config/db";
import { Result } from "pg";
import { authService } from './auth.service';
import { resolve } from "dns";

const register:RequestHandler = async (req,res,next)=>{
 try {
    
const {name,password,email,role} = req.body;

const result =await authService.register(req.body)
//console.log({result:result.rows[0]},{depth:null})

 res.send({
    message:"User create Succesfully",
    data:result,
    
});

 } 
 catch (error:unknown) {
     res.send({
    message:error instanceof Error ? error.message: "Something Went Wrong",
    data:error,
    
});
 }
};

const login:RequestHandler =async(req,res,next) => {

try {
    const {email,password } = req.body;

    const {user,Token} = await authService.login(email,password);


 res.send({
    message:"User Logged In Succesfully",
    data:{user,Token},
    
});


} catch (error) {
       res.send({
    message:error instanceof Error ? error.message: "Something Went Wrong",
    data:error,
});

}

}


export const authcontroller ={
    register,login
};