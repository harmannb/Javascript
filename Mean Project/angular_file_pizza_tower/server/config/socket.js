module.exports = function(app, server){
var io = require('socket.io').listen(server)
var player_arr = [];

io.sockets.on('connection', function(socket){
  console.log("WE ARE USING SOCKETS");
  console.log(socket.io)

  socket.on('new_player_entered', function(playerdata){
  	player_arr.push(playerdata);
  	console.log("data pushed");
  	// socket.broadcast.emit('new_player_entered', playerdata);
  	io.emit('existing_players', player_arr);
  	// socket.emit('existing_players', player_arr);
  })


	});

}