"use strict"

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next)=> {
    res.send("Welcome to Express Server");
});

app.get('/json', (req, res, next)=> {
	let data = {
		name : "jason",
		gender : "male",
		age : 34
	}
    res.json(data);
});

app.get('/pug', (req, res, next) => {
	res.render('index', { title : 'Express' } );
});

app.listen(port, () => {
	console.log(`express server is running at port ${port}`);
});
