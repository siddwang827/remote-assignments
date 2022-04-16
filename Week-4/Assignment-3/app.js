const express = require('express');
const db = require("./database");
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

// middleware congfig 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// static config
app.use('/static', express.static('public'));

// template engine
app.set('view engine', 'pug');

// routes
const mainRoutes = require('./routes')
app.use(mainRoutes);





const port = process.env.PORT
app.listen(port, () => {
    console.log('Server started on port 3000')
});