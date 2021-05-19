const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

//use statements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(express.static(path.join(__dirname, './public')));

app.listen(port);
console.log('Server started at http://localhost:' + port);
