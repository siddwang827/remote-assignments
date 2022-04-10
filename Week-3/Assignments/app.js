const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// static
app.use(express.static('public'));

// template engine
app.set("view engine", "pug");

//routes
const mainRoutes = require('./routes')
const dataRoutes = require('./routes/data')

app.use(mainRoutes);
app.use('/data', dataRoutes)






app.listen(3000, () => {
    console.log('Assignment app listening on port 3000!')
})