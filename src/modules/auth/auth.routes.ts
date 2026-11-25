import { Router } from "express";
import { authcontroller } from "./auth.controller";



const authRouter = Router();

authRouter.post("/register",authcontroller.register)
authRouter.post("/login",authcontroller.login)

export default authRouter;