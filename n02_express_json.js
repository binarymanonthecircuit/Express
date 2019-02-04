"use strict"

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/json', (req, res, next)=> {
	let data = {
		name : "jason",
		gender : "male",
		age : 34
	}
    res.json(data);
});

app.listen(port, ()=>{
    console.log(`express server starts at port ${port}`)
});
