anguapp.controller('welcomeCtrl',function($scope,$uibModal,$uibModalInstance,$location,gameFactory){
  
    $scope.startGame = function(){

      socket.emit('new_player_entered', $scope.player);


      socket.on('existing_players', function socketdata(player_arr){
      	gameFactory.existing_players(player_arr);
      })

      gameFactory.saveFormData($scope.player,function(){
        $location.path('/gamepage');
        $uibModalInstance.close(); 
      })
    }


})
