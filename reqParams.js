const express = require("express");
const app = express();

app.get("/car/make/:makeId", (req, res) => {
	res.send(req.params);
	console.log(req.params);
	for (const key in req.params) {
		console.log(key, req.params[key]);
	}
})

app.listen(3000, ()=> {
	console.log('express server is running');
})





