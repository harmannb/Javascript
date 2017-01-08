console.log('friends model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
});

var Friend = mongoose.model("Friend", FriendSchema)

Friend.create({name:"Harmann", age:22}, function(err) {
  if (err) {
    console.log("there is an error")
  }
})
