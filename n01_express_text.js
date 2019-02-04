"use strict"

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
/* 
   code means, if system are already using any port for web listening,
   use it. but if not, set the port 3000 for it.
   || : logical OR.    && : logical AND.
*/

app.get('/', (req, res, next)=> {
    res.send("Welcome to Express Server");
});

app.listen(port, ()=>{
    console.log(`express server starts at port ${port}`)
});

/*
	ES6, string formatting, ${  }. any variable or operation can be
	placed. be careful of quotation mark.
*/
