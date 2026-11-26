import { NextFunction, RequestHandler,Response,Request } from "express";
import { jwtHelpers } from "../utils/jwthelpers";
import { JwtPayload } from 'jsonwebtoken';
import { Result } from 'pg';

const verifyToken:RequestHandler = async(req,res,next) =>{

    const authHeader =req.headers.authorization;

    if(!authHeader) {
        throw new Error("Access Denied ! Token not Found")
    }
    try {
        const decoded = jwtHelpers.verifyToken(authHeader);

       // console.log({decoded})

   req.user = decoded as JwtPayload;


    } catch (error) {
        throw new Error("Invalid or Expired Token")
    }
next();
}

const authorizedRole = (...roles: string[]) => {
return(req:Request,res:Response,next:NextFunction) => {
if(!req.user || !roles.includes(req.user.role)) {
    
   const error = new Error("You do not have permission!");
                error.statusCode = 403;
                throw error;
            }
next();
}


};

export const authmiddleware = {
    verifyToken,authorizedRole,
}