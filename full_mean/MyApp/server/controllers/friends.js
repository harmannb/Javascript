console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

function FriendsController(){
  this.index = function(req,res){
    console.log('creating a FriendsController')
    Friend.find({}, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
    })
  };
  this.create = function(req,res){
    console.log('this is the friends name', req.body.name)
    var newFriend = new Friend({ name: req.body.name, age: req.body.age });
    newFriend.save(function(err, result){
      if (err) {
        console.log('there was an error when saving friend', err);
        res.json({error: "Invalid Credentials"});
      } else {
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController(); //



