import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (err:any,req:Request,res:Response,next:NextFunction) =>{
 
let statusCode = err.statusCode ?? 500

let message = err.message ?? "Internal Server Error"

let errDetails = err;
     res.status(statusCode).send({
    message,
    data:err,
});
}

export default globalErrorHandler;