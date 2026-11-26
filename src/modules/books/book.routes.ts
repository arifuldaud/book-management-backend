import { Router } from "express";
import { bookcontroller } from './book.controller';


const bookRouter  = Router();

bookRouter.post("/",bookcontroller.createBook);


bookRouter.get("/",bookcontroller.getBooks);

bookRouter.patch("/:id",bookcontroller.updateBook);


bookRouter.delete("/:id",bookcontroller.deleteBook);

export default bookRouter;