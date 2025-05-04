const express = require('express');
const app = express();
const path = require('path');

// req body in json format is parsed by below middleware
app.use(express.json());

// req body in urlencoded form is parsed by below middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/search', (req, res) => {
    const { pageSize=10, pageNum=1 } = req.query; //query params
    res.send(`You are making a search request with pageSize ${pageSize} and pageNum ${pageNum}`);
});

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params; //path params
    //making a database call : subredit
    res.send(`You making a request to ${subredit} subredit`);
});

app.get('/users', (req, res) => {
    console.log(req.query);
    res.send('You made a get request');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('You made a post request');
});

app.listen(1234, () => console.log('server started at port 1234'));


// https://search.brave.com/search?q=pizza&source=desktop


// https://www.reddit.com/r/Home/

// https://www.reddit.com/r/cat/

// https://www.reddit.com/r/DOG/