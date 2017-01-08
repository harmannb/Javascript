app.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
  var index = function(){
      console.log('hello index')
      friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
        console.log($scope.friends);
      });
   };
   index();

  friendsFactory.getFriends(function(data) {
      $scope.friends = data;

  });

  $scope.create = function(){
    console.log($scope.new_friend);
    friendsFactory.addfriend($scope.new_friend, function(data){
      console.log(data);
      $scope.new_friend = data;
      $scope.friends = friendsFactory.getFriends();
        $scope.new_friend = {};
    });
  };

}]);


