import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
    path: path.join(process.cwd(), ".env")
});

const config = {
    port: Number(process.env.PORT) || 4000,
    nodeEnv: process.env.NODE_ENV,
    connection_string: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET,
};

export default config;