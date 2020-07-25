import express from 'express';

const app = express();

app.get('/', (req) => {
    console.log(req.method);
});

app.listen(3001, () => {
    console.log('LOL');
});
