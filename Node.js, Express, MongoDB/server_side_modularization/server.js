var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})
var Quote = mongoose.model('Quote', QuoteSchema);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
  console.log('listening on port 8000');
})
