import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes";
import bookRouter from "./modules/books/book.routes";
import globalErrorHandler from "./middleware/globalerrorhandler";


const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/api/auth",authRouter);

app.use("/api/book",bookRouter);

app.use((req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});



app.use(globalErrorHandler);

export default app;