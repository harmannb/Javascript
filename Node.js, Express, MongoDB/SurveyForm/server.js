var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var route = require('./static/index.js');
route(app);

app.listen(8000, function(){
  console.log('listening to port 8000');
})
