var express = require('express')
var router = express.Router()
var user = require('./controllers/user')

router.route('/register') 
	.post(user.post)

module.exports = router
