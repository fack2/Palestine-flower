const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const router = require('./controllers/index')

app.use(express.json());
app.use(express.urlencoded());

app.use(router)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        // partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main'
    })
);
module.exports = app
