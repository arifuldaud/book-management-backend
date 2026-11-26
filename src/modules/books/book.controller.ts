import { RequestHandler } from "express";
import { bookService } from "./book.service";
import { isDataView } from "node:util/types";


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


const getBooks:RequestHandler = async(req,res) => {
try {
    const result = await bookService.getBooks(req.query.search as string);

    res.status(201).send({
        message: "Book Retrived Successfully",
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


const updateBook:RequestHandler = async(req,res) => {
try {

    const id = req.params.id;
    const result = await bookService.updateBook(id as string,req.body);

    res.status(201).send({
        message: "Book updated Successfully",
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


const deleteBook:RequestHandler = async(req,res) => {
try {

    const id = req.params.id;
    const result = await bookService.deleteBook(id as string);

    res.status(201).send({
        message: "Book delete Successfully",
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

export const bookcontroller = {createBook,getBooks,
   updateBook,deleteBook,
};