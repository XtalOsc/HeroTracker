myApp.controller("viewController",["$scope","$http",function($scope,$http){
  console.log("in viewController");
  $scope.heroes = [];
  $scope.viewHeroes = function(){
    $http({
      method: 'Get',
      url: '/viewAll'
    }).then(function(response){
      console.log('returned from server ', response);
      $scope.heroes = response.data;
    })//end return
  };//end function
  $scope.viewHeroes();
  
}]);//end viewController
