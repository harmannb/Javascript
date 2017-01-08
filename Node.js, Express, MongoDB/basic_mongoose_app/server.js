var express = require('express');

var app = express();

var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/basic_mongoose');


var UserSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number}
  }, {timestamps: true});

  mongoose.model('User', UserSchema);

var User = mongoose.model('User');

var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

  app.use(express.static(path.join(__dirname, './static')));

  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'ejs');


  app.get('/', function(request, response){
    User.find({}, function(error, users){
      if(error){
        console.log('something went wrong', error);
      } else {
        console.log('successfully added a user!');
        response.render('index', {users:users})
      }
    });
  });

  app.post('/users', function(request, response){
    console.log('POST DATA', request.body);

    var user = new User({name: request.body.name, age: request.body.age});

    user.save(function(error){
      if(error){
        console.log('something went wrong');
      } else {
        console.log('successfully added a user!');
        response.redirect('/');
      }
    })
  })

app.listen(8000, function(){
  console.log('listening to port 8000');
});
