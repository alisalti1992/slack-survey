// @ts-ignore
// @ts-ignore
import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(3000, () => {
    console.log('localhost:3000');
});