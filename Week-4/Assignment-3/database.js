const mysql = require('mysql');

require('dotenv').config();

// Create connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
});

// Connect
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL is Connected.!')
});

module.exports = db;