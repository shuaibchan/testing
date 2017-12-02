var express = require('express')//import  supayaexpress library
var app = express()//initialize express
var router = require("./src/router")//import router
var bodyParser = require('body-parser') //user bole post json

app.use(bodyParser.json())//middleware utk handle request json

app.use('/api', router)//prefix attach route

app.listen(3000, function() { //listen port & start server
	console.log("started")
})