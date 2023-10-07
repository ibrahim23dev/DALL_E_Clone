import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('get', async (req, res) => {
    res.send("Hello Mohammad Ibrahim");

})

const startServer = async () => {
    app.listen(8080, () => 
        console.log("Server is Running On port http://localhost:8080")
    )
}

startServer();