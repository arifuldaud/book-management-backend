import { constants } from "buffer";
import { pool } from "../../config/db";
import { IBook } from "./book.interface";




const createBook = async(payload:IBook) => {
 
const{title,description,author,isbn,total_copies,available_copies} =payload;

const result = await pool.query(`INSERT INTO books(title,description,author,isbn,total_copies,available_copies) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,[title,description,author,isbn,total_copies,available_copies],

);
return result.rows[0];

};



const getBooks = async(serach:string) => {
    const result =await pool.query(`SELECT * FROM books`,);

    return result.rows[0];
}

export const bookService ={
    createBook,getBooks,
}