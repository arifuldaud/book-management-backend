import { Router } from "express";
import { bookcontroller } from './book.controller';


const bookRouter  = Router();

bookRouter.post("/",bookcontroller.createBook);


bookRouter.get("/",bookcontroller.getBooks);

export default bookRouter;