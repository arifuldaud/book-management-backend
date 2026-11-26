import { Router } from "express";
import { bookcontroller } from './book.controller';
import { authmiddleware } from '../../middleware/auth.header';


const bookRouter  = Router();

bookRouter.post("/",bookcontroller.createBook);


bookRouter.get("/",authmiddleware.verifyToken,bookcontroller.getBooks);

bookRouter.patch("/:id",bookcontroller.updateBook);


bookRouter.delete("/:id",bookcontroller.deleteBook);

export default bookRouter;