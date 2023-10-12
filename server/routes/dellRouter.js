import express from "express";
import * as dotenv from 'dotenv';
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: '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',
});

const router = express.Router();
router.route('/').post((req, res) => {
    res.send("Hello, Assalamualikum, I'm Mohammad Ibrahim");
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024", // Use lowercase 'x' instead of 'X'
            response_format: 'url', // Use ':' instead of '='
        });
        const image = aiResponse.data[0].url; // Access the URL property
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response?.data?.error?.message || 'An error occurred');
    }
});

dotenv.config();

export default router;
