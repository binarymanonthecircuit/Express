"use strict"

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pug', (req, res, next) => {
	res.render('index', { title : 'Express' } );
});

app.listen(port, () => {
	console.log(`express server is running at port ${port}`);
});

/* 
   codes added for pug view
   ----------------------------------------------------------------------------------------------------------------------
   const path = require('path') ; for use of path.join method.
   
   app.set('views', path.join(__dirname, 'views'))	; views saved folder setting.
   app.set('view engine', 'pug')                    ; view engine to render the files in 'views'
   
   app.use(express.static(path.join(__dirname, 'public'))); static view files, which is not being rendered by view engine.
   
   res.render('index', { title : 'Express'}         ; 'index' -> pug file name, 'title:'Express' -> parameter to pug file.
   -----------------------------------------------------------------------------------------------------------------------
   index.pug file must be located into 'views' folder.
*/
