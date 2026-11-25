import { Router } from "express";
import { authcontroller } from "./auth.controller";



const authRouter = Router();

authRouter.post("/register",authcontroller.register)

export default authRouter;