var app = angular.module('app', ['ngRoute']);

(function(){
  app.config(function($routeProvider){
    $routeProvider
      .when('/friends',
      {
        controller: 'newController',
        templateUrl: "assets/partials/new.html"
      })
      .when("/friends/:id",
      {
        controller: 'editController',
        templateUrl: "assets/partials/edit.html"
      })
  })
}());
