//import dontenv from "dotenv"; as early as possible to load environment variables from .env file so that they are available throughout the application
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
}  
);







connectDB();



