var express = require('express')
var app = express()

var port = process.env.PORT || 3000

var mongoose = require('mongoose')
var book = require('./api/models/bookModel')// created model loading here
var bodyParser = require('body-parser')

//mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var routes = require('./api/routes/bookRoutes')// importing route
routes(app)// register the route

app.listen(port)