console.log('routes');

var friends = require("./../controllers/friends.js");

module.exports = function(app){
  app.get('/friends', function(req,res){
    console.log("index function working")
    friends.index(req,res);
  });

  app.get('/friends/new', function(req, res) {
    console.log("create function working")
    friends.create(req, res);
  });

  app.get('/friends/new', function(req, res) {
    friends.show(req, res);
  });

  app.post('/friends', function(req, res){
    console.log('here', req.body);
    friends.add(req, res);
  });

  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
}



