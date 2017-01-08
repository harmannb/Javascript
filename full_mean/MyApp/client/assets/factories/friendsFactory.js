
app.factory('friendsFactory', ['$http', function($http) {
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;


    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      })
    };

    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) === 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(){

    };

    this.delete = function(){

    };

    this.show = function(){

    };

    this.getFriends = function(callback){
      console.log('get friends')
      callback(friends);
    };

    // this.getFriend = function(callback){
    //   callback(friend);
    // };
  }

  console.log(new FriendsFactory());
  return new FriendsFactory();

}]);
