import express from 'express';

const app = express();

app.get('/', (req) => {
    console.log(req.method);
    const x = 1;
});

app.listen(3001, () => {
    console.log('LOL');
});
