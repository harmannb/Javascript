var mongoose = require ('mongoose');
var Pig = mongoose.model('Pig');
module.exports = {
  index: function(request, response){
    Pig.find({}, function(error, pigs){
      if(error){
        console.log('something went wrong', error);
      } else {
        console.log('successfully added a Pig!');
        response.render('index', {pigs:pigs})
      }
    });
  },

  create: function(request, response){
  var pig = new Pig({name: request.body.name, age: request.body.age});

  pig.save(function(error){
    if(error){
      console.log('something went wrong');
    } else {
      console.log('successfully added a pig!');
      response.redirect('/');
      }
    })
  },

  show: function(request, response){
    Pig.find({}, function(error, pigs){
      if(error){ console.log(error);}
        response.render('index', {pigs:pigs})
    })
  },

  edit: function(request, response){
    Pig.find({ _id: request.params.id }, function(error, pig){
      console.log(pig)
      if(error){ console.log(error);}

        response.render('edit', {pig:pig[0]})
    })
  },

  update: function(request, response){
    Pig.find({ _id: request.params.id },function(error, pig) {
      pig.name = request.body.name;
      pig.age = request.body.age;

      pig.save(function(error){
      if(error){console.log(error);}
        response.redirect('/');
      })
    })
  },


  delete: function(request, response){
    Pig.remove({ _id: request.params.id },function(error) {
      if(error){console.log(error);}
        response.redirect('/');
    });
  }

}
