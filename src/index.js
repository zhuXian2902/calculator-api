/** @format */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.urlencoded());
const calRoutes = require('./calRoute');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your

app.use('/', calRoutes);
// here

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
