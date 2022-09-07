require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Lucas Piscitello',
        title: 'Node Web Server'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Lucas Piscitello',
        title: 'Node Web Server'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Lucas Piscitello',
        title: 'Node Web Server'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`app listening at the http://logalhost:${port}`);
});