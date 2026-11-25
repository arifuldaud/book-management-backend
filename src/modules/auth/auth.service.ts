import { pool } from "../../config/db";
import { jwtHelpers } from "../../utils/jwthelpers";
import { passwordHelpers } from "../../utils/passwordHepler";
import { IUser } from "./auth.interface";

const register = async(payload:IUser) =>{

    const {email,name,id,password,role} =payload;

const hashedPassword = passwordHelpers.hashPassword(password);
const result = await pool.query(
    `INSERT INTO users(name, email, password, role)
     VALUES($1, $2, $3, $4) RETURNING name,email,role,id ` ,
    [name, email, hashedPassword, role]
);
 return result.rows[0];
};



const login = async(email:string,password:string) =>{
const isUserExits =await pool.query<IUser>("SELECT * FROM users WHERE email=$1",[email,]);

const user = isUserExits.rows[0];

if(!user || !passwordHelpers.compareHash(password,user.password)) {

    const error =new Error ("Invaild Emial or Password")
  throw error;

}
const Token = jwtHelpers.genarateToken({id:user.id,email:user.email,role:user.role});

return {user,Token};


};


export const authService = {
    register,login
};