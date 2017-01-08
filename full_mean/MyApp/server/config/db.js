console.log('mongoose connection, mongoose setup');

var mongoose = require('mongoose');

var fs = require('fs');

mongoose.connect('mongodb://localhost/friendsdb');

mongoose.connection.on( 'connected', function () {
  console.log( 'Mongoose default connection open to friendsdb' );
});


mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});


mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});


var models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})













































