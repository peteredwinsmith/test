var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "peteredwinsmith",
  password: "F5aZMmZ2ne9NKCFN",
  database: "bcm",
  insecureAuth: true
});

const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({ extended: false }));

console.log("Hello-1");

// Get all the customers from the database
app.get('/', (req, res) => {
  con.query('SELECT * FROM customer', (err, rows, fields) => {
    if (err) {
      throw err;
    }
    // Send the data back to the HTML page
    console.log("Hello-2");
    console.log(rows);
    res.send(rows);
  });
});

// Listen on port 3000
app.listen(3000, () => console.log('Server started'));