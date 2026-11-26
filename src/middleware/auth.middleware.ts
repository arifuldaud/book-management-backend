import { RequestHandler } from "express";
import { jwtHelpers } from "../utils/jwthelpers";

const verifyToken:RequestHandler = async(req,res,next) =>{

    const authHeader =req.headers.authorization;

    if(!authHeader) {
        throw new Error("Access Denied ! Token not Found")
    }
    try {
        const decoded = jwtHelpers.verifyToken(authHeader);

        console.log({decoded})

    } catch (error) {
        throw new Error("Invalid or Expired Token")
    }

}

export const authmiddleware = {
    verifyToken,
}