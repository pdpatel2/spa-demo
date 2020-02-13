const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const html = require("html-template-tag");

//logging middleware
app.use(morgan("dev"));

//serving up static files (e.g. css files)
app.use(express.static(path.join(__dirname, "../public")));

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', require('./api'))

app.use((req, res, next) => {
  res.status(404).send('<h1>Page does not exist</h1>');
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('custom error');
});


module.exports = app;
