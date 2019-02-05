var express = require('express');
var app = express();

app.get("/car/make", (req, res) => {
	res.send(req.query);
    console.log(req.query);
	for (const key in req.query) {
		console.log(key, req.query[key]);
	}
});

app.listen(3000, ()=> {
	console.log('server is running.');
})

