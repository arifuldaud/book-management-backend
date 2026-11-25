import app from "./app";
import config from "./config";

import {pool} from "./config/db"
import { initDatabase } from "./config/initDB";

const startServer = async() => {
    
    try {

const time = await pool.query("SELECT NOW()")
      
     console.log("Database Connected:", time.rows[0]);
      
     initDatabase()
     
     app.listen(config.port, () => {
            console.log(`Server Is Running On: ${config.port}`);
        });
    } catch (error) {
        console.log("Failed To Start The Server", error);
    }
};

startServer();