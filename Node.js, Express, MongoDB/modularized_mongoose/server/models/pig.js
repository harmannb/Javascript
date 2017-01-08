var mongoose = require('mongoose');

var PigSchema = new mongoose.Schema({
  name: String,
  age: Number
  }, {timestamps: true});

var Pig =   mongoose.model('Pig', PigSchema);

