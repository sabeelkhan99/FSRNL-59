const express = require('express');
const app = express();

// This will be executed for all type of request
// app.use((req, res) => {
   
// });

app.get('/', (req, res) => {
    res.send({ message: 'Hello from the server' });
})

app.get('/cat', (req, res) => {
    res.send('<h1>Meeooowww</h1>');
});


app.get('/dog', (req, res) => {
    res.send('<h1>Woof Woof</h1>');
});

app.get('/person', (req, res) => {
    res.send('Hello from person 👋');
});

app.post('/login', (req, res) => {
    res.send('This is a login request');
});


app.listen(1234, () => {
    console.log('Server started at port 1234');
});