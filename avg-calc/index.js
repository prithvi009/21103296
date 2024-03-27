import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import calcRouter from './routes/calc.routes.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();

global.nums = [2, 4, 6, 8];

app.use(cors());
app.use(bodyParser.json());

app.use('/api', calcRouter);

app.listen(8081, () => {
    console.log('Server is running on port 8082');
});