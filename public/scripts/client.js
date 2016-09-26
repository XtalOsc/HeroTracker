console.log("client.js sourced");
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addController"
      }).
      when("/view", {
        templateUrl: "/views/partials/view.html",
        controller: "viewController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
