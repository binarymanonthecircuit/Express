"use strict"

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const mustache = require('mustache-express');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', mustache());

app.get('/', (req, res, next) => {
	res.render('index', {serverName : 'mustache'})
});

app.listen(port, ()=> {
	console.log(`mustache-express server is running at ${port}`);
})
