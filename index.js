var express = require('express')
var app = express()
var router = require("./src/router")
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/api', router)

app.listen(3000, function() { 
	console.log("started")
})