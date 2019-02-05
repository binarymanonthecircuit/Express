"use strict"

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/router')
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => {
	console.log(`express server is running at port ${port}`);
});

module.exports = app;

// be aware of app.USE('/', indexRouter); 
