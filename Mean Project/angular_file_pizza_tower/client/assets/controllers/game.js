anguapp.controller('gameCtrl',function($scope,gameFactory){
  $scope.player_array = [];
  $scope.player = gameFactory.player;
  $scope.canvas = document.getElementById('canvasRegn');
  $scope.game = function(){
    gameFactory.playgame($scope.player,$scope.canvas,function(){

    })
  }

$scope.player_array = gameFactory.existing_player;
$scope.game();

})
