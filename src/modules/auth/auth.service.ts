import { pool } from "../../config/db";
import { passwordHelpers } from "../../utils/passwordHepler";
import { IUser } from "./auth.interface";

const register = async(payload:IUser) =>{

    const {email,name,id,password,role} =payload;

const hashedPassword = passwordHelpers.hashPassword(password);
const result = await pool.query(
    `INSERT INTO users(name, email, password, role)
     VALUES($1, $2, $3, $4) RETERNING name,email,role,id ` ,
    [name, email, hashedPassword, role]
);
 return result.rows[0];
};



const login = async(email:string,password:string) =>{

};


export const authService = {
    register,
}