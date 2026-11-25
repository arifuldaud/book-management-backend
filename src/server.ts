import app from "./app";

const port = process.env.PORT || 4000;
const startServer = () => {

    try {
        app.listen(port, () => {
    console.log(`Server Is Running On:${port}`);
});
    } catch (error) {
        console.log("Failed To Connect The Server",error);
    }

}

startServer();