import { RequestHandler } from "express";
import { bookService } from "./book.service";


const createBook:RequestHandler = async(req,res) => {
try {
    const result = await bookService.createBook(req.body);

    res.status(201).send({
        message: "Book Created Successfully",
        data: result,
    });

} catch (error: unknown) {
    res.status(500).send({
        message: error instanceof Error
            ? error.message
            : "Something Went Wrong",
    });
}
}

export const bookcontroller = {createBook};