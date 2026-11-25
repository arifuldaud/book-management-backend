import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes";

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


export default app;