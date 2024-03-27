import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8082, () => {
    console.log('Server is running on port 3000');
});