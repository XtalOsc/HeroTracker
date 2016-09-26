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

  //delete hero
  $scope.deleteHero = function(){
    $http({
      method: 'Delete',
      url: '/deleteHero/'+ this.hero._id
    }).then(function(response){
      console.log('returned from server ', response);
      $scope.viewHeroes();
    })//end return
  };//end function
}]);//end viewController
