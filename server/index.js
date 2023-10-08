import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
//import mongoose from 'mongoose';
import connectBD from './mongodb/connect.js';
import postRouter from "./routes/postRouter.js";
import dellRouter from "./routes/dellRouter.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('api/v1/post', postRouter);
app.use('api/v1/dell', dellRouter);

app.get('get', async (req, res) => {
    res.send("Hello Mohammad Ibrahim");

})

const startServer = async () => {

    try {
        connectBD(process.env.MONGODB_URL);
       app.listen(8080, () => 
        console.log("Server is Running On port http://localhost:8080")
    )
   } catch (error) {
    console.log(error)
   }
}

startServer();