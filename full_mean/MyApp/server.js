
var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

var app = express();

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static( path.join( __dirname+'/client')));
app.use(express.static( path.join( __dirname+'/bower_components')));


require('./server/config/db.js');
require('./server/config/routes.js')(app);


app.listen(port, function() {
  console.log('running on 8000');
});


