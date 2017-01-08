app.controller('editController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
  friendsFactory.getFriend(function(returnedData){
    $scope.friend = returnedData;
    console.log($scope.friend);
  });
}]);
