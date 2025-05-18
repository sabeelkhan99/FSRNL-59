const express = require('express');
const app = express();
const fsp = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(__dirname, 'package.json');

app.get('/users', (req, res) => {
    const { isTrue } = req.query;
    if (Boolean(isTrue)) {
        throw new Error('This is the delibratly thrown error');
    }
    res.send('Hello from users');
});

app.get('/async-users', async (req, res) => {
    console.log('Request recived');
    const fileString = await fsp.readFile(filePath, { encoding: 'utf-8' });
    if (true) {
        throw new Error('Error from async code');
        // next(new Error('Inside async'));
    }
    res.send(fileString);
});


// Express global error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log('server started at port 3000'));


