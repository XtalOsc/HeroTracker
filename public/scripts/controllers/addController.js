myApp.controller("addController",['$scope', '$http',function($scope,$http){
  console.log("in addController");
  $scope.addNewHero = function(){
    //add new hero object
    var newHero ={
      alias: $scope.alias,
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      city: $scope.city,
      power_name: $scope.powerName
    };//end newHero object
    $http({
      method: 'POST',
      url: '/addHero',
      data: newHero
    }).then(function(response){
      console.log('returned from server ', response);
      //empty input fields
      $scope.alias="";
      $scope.firstName="";
      $scope.lastName="";
      $scope.city="";
      $scope.powerName="";
    })//end return
  };//end addNewHero
}]);//end addController
