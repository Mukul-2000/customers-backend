import * as dotenv from "dotenv";
import path from 'path';
dotenv.config();

export const CONFIG = {
    DB_CONNECTION_STRING: process.env.DB_STRING,
    PORT: process.env.PORT || 4000,
    uploadsFolderPath: path.resolve(__dirname, '../../uploads'),

}