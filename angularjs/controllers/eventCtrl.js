var eventControllers = angular.module('eventControllers', []);

eventControllers.controller('EventDetailCtrl', 
	['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {
  	
    $http.get('http://localhost:2403/events?id='+$routeParams.eventId)
  	//$http.get('http://localhost:2403/ivents?id=abaa08310c2c6968')
  	
  		.success(function(data){
  			$scope.eventId=angular.fromJson(data);
  			//$scope.iventId = $routeParams.iventId;
  		});
  		//console.log($routeParams.iventId);
   // $scope.iventId = $routeParams.iventId;
  }]);