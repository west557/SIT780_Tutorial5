// index.js

'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const name = process.env.name || "World"

//App 
const app = express();
app.get('/', (req, res) => {
    //print host name
    res.send(`Hello from ${os.hostname()}!`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

