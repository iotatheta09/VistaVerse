import express from 'express';
import userRouter from "./routes/user.routes.js";
import cors from 'cors';

import cookieParser from 'cookie-parser';

const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN ,
        credentials: true   
    }
));

app.use(express.json({
    limit:"50kb"
}));

app.use(express.urlencoded({
    limit:"50kb",
    extended:true
}));

app.use(cookieParser());


app.use(express.static('public'));






app.use("/api/v1/users", userRouter);
//first come to /api/v1/users then to userRouter and then to /register and then to registerUser controller function 
// and then whole route is /api/v1/users/register and method is post and then we will get response from registerUser controller function

//

export {app};