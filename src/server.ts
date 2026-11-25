import app from "./app";
import config from "./config";

import {pool} from "./config/db"

const startServer = async() => {
    
    try {

const time = await pool.query("SELECT NOW()")
      
     console.log("Database Connected:", time.rows[0]);
        app.listen(config.port, () => {
            console.log(`Server Is Running On: ${config.port}`);
        });
    } catch (error) {
        console.log("Failed To Start The Server", error);
    }
};

startServer();