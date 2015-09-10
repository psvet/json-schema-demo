'use strict'

const express = require('express');
const open = require('open');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./index');
});

app.listen(8000, () => {
  open('http://localhost:8000');
});
