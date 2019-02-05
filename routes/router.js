"use strict"

const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
	console.log('routing request : time - ', Date());
	next();
});

router.get('/', (req, res, next)=> {
    res.send("Welcome to Express Server");
});

router.get('/json', (req, res, next)=> {
	let data = {
		http : "node js",
		routing : "express js",
		view : "pug",
		database : "mongodb"
	}
    res.json(data);
});

router.get('/pug', (req, res, next) => {
	res.render('index', { title : 'Express' } );
});

module.exports = router;
