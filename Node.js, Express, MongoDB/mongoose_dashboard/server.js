var express = require('express');

var app = express();

var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/mongoose_dashboard');


var PigSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number}
  }, {timestamps: true});

  mongoose.model('Pig', PigSchema);

var Pig = mongoose.model('Pig');

var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

  app.use(express.static(path.join(__dirname, './static')));

  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'ejs');

  // INDEX
  app.get('/', function(request, response){
    Pig.find({}, function(error, pigs){
      if(error){
        console.log('something went wrong', error);
      } else {
        console.log('successfully added a Pig!');
        response.render('index', {pigs:pigs})
      }
    });
  });


  // NEW
  app.get('/pigs/new', function(request, response){
    Pig.find({}, function(error, pigs){
      if(error){
        console.log('something went wrong', error);
      } else {
        console.log('successfully added a Pig!');
        response.render('index', {pigs:pigs})
      }
    });
  });

  // POST NEW
  app.post('/pigs', function(request, response){
    console.log('POST DATA', request.body);

    var pig = new Pig({name: request.body.name, age: request.body.age});

    pig.save(function(error){
      if(error){
        console.log('something went wrong');
      } else {
        console.log('successfully added a pig!');
        response.redirect('/');
      }
    })
  })

  // SHOW
  app.get('/:id/', function(request, response){
    Pig.find({}, function(error, pigs){
      if(error){ console.log(error);}
        response.render('index', {pigs:pigs})
      })
  });

  // EDIT
  app.get('/:id/edit/', function(request, response){
    Pig.find({ _id: request.params.id }, function(error, pig){
      console.log(pig)
      if(error){ console.log(error);}
        response.render('edit', {pigs: pig})
    });
  });

// UPDATE
  app.post('/pigs/:id', function(request, response){
    console.log('POST DATA', request.body);

    Pig.find({ _id: request.params.id },function(error, pig) {
      pig.name = request.body.name;
      pig.age = request.body.age;

      pig.save(function(error){
      if(error){console.log(error);}
        response.redirect('/');
      })
    })
  })


// DELETE
 app.post('/:id/delete', function(request, response){
    Pig.remove({ _id: request.params.id },function(error) {
      if(error){console.log(error);}
        response.redirect('/');
    });
  });

app.listen(8000, function(){
  console.log('listening to port 8000');
});
