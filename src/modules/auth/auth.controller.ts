import { RequestHandler } from "express";
import bcrypt from "bcryptjs"
import { passwordHelpers } from "../../utils/passwordHepler";
import { pool } from "../../config/db";
import { Result } from "pg";

const register:RequestHandler = async (req,res,next)=>{
 try {
    
const {name,password,email,role} = req.body;

const hashedPassword = passwordHelpers.hashPassword(password);
const result = await pool.query(
    `INSERT INTO users(name, email, password, role)
     VALUES($1, $2, $3, $4)`,
    [name, email, hashedPassword, role]
);
console.log({result},{depth:null})

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

export const authcontroller ={
    register
}  