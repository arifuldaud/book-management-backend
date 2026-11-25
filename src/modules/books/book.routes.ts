import { Router } from "express";
import { bookcontroller } from './book.controller';



const bookRouter  = Router();

bookRouter.post("/",bookcontroller.createBook);

export default bookRouter;