import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes.js';
import productRouter from './routes/products.routes.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', productRouter);

app.listen(8082, () => {
    console.log('Server is running on port 8082');
});