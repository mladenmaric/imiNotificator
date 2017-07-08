var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');

var app = module.exports = express();

var index = require('./routes/index');
var api = require('./routes/api');

// cors middleware
app.use(cors());

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setting the PORT of an app
app.set('PORT', process.env.PORT || 3000);

// Routing the routes
app.use('/', index);
app.use('/api', api);

app.listen(app.get('PORT'), (err) => {
	if (err) throw err;
	console.log("Server started on PORT = " + app.get('PORT'));
}); 
