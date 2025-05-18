const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     res.send('HIJACKED BY MY APP.USE()');
// });

const verifyApiToken = (req, res, next) => {
    const { apiKey } = req.query;
    if (apiKey !== 'apple') {
        return res.send('Invalid API Key');
    }
    return next();
}


// app.use((req, res, next) => {
//     console.log('Inside my first middleware');
//     next()
//     console.log('Inside my first middleware after calling next');
// });

// app.use((req, res, next) => {
//     console.log('Inside my second middleware');
//     next()
//     console.log('Inside my second middleware after calling next');
// });

// app.get('/', (req, res) => {
//     console.log('Inside the root path')
//     res.send('Hello from the server');
// });

// app.get('/users', (req, res) => {
//     const { username } = req;
//     res.send(`You are requesting with the username :${username}`);
// });

app.get('/secret',verifyApiToken, (req, res) => {
    res.send('Sometime i wear headphones in public so that i dont have to talk to anyone');
});

app.listen(3000, () => console.log('server started at port 3000'));


